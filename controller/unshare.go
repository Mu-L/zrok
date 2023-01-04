package controller

import (
	"context"
	"fmt"
	"github.com/go-openapi/runtime/middleware"
	"github.com/openziti-test-kitchen/zrok/controller/store"
	"github.com/openziti-test-kitchen/zrok/controller/zrokEdgeSdk"
	"github.com/openziti-test-kitchen/zrok/rest_model_zrok"
	"github.com/openziti-test-kitchen/zrok/rest_server_zrok/operations/share"
	"github.com/openziti/edge/rest_management_api_client"
	edge_service "github.com/openziti/edge/rest_management_api_client/service"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"time"
)

type unshareHandler struct{}

func newUnshareHandler() *unshareHandler {
	return &unshareHandler{}
}

func (h *unshareHandler) Handle(params share.UnshareParams, principal *rest_model_zrok.Principal) middleware.Responder {
	tx, err := str.Begin()
	if err != nil {
		logrus.Errorf("error starting transaction: %v", err)
		return share.NewUnshareInternalServerError()
	}
	defer func() { _ = tx.Rollback() }()

	edge, err := edgeClient()
	if err != nil {
		logrus.Error(err)
		return share.NewUnshareInternalServerError()
	}
	shrToken := params.Body.ShrToken
	svcZId, err := h.findServiceZId(shrToken, edge)
	if err != nil {
		logrus.Error(err)
		return share.NewUnshareNotFound()
	}
	var senv *store.Environment
	if envs, err := str.FindEnvironmentsForAccount(int(principal.ID), tx); err == nil {
		for _, env := range envs {
			if env.ZId == params.Body.EnvZID {
				senv = env
				break
			}
		}
		if senv == nil {
			err := errors.Errorf("environment with id '%v' not found for '%v", params.Body.EnvZID, principal.Email)
			logrus.Error(err)
			return share.NewUnshareNotFound()
		}
	} else {
		logrus.Errorf("error finding environments for account '%v': %v", principal.Email, err)
		return share.NewUnshareNotFound()
	}

	var sshr *store.Share
	if shrs, err := str.FindSharesForEnvironment(senv.Id, tx); err == nil {
		for _, shr := range shrs {
			if shr.ZId == svcZId {
				sshr = shr
				break
			}
		}
		if sshr == nil {
			err := errors.Errorf("share with id '%v' not found for '%v'", svcZId, principal.Email)
			logrus.Error(err)
			return share.NewUnshareNotFound()
		}
	} else {
		logrus.Errorf("error finding shares for account '%v': %v", principal.Email, err)
		return share.NewUnshareInternalServerError()
	}

	if sshr.Reserved == params.Body.Reserved {
		// single tag-based share deallocator; should work regardless of sharing mode
		if err := h.deallocateResources(senv, shrToken, svcZId, edge); err != nil {
			logrus.Errorf("error unsharing ziti resources for '%v': %v", sshr, err)
			return share.NewUnshareInternalServerError()
		}

		logrus.Debugf("deallocated share '%v'", shrToken)

		if err := str.DeleteShare(sshr.Id, tx); err != nil {
			logrus.Errorf("error deactivating share '%v': %v", svcZId, err)
			return share.NewUnshareInternalServerError()
		}
		if err := tx.Commit(); err != nil {
			logrus.Errorf("error committing transaction for '%v': %v", svcZId, err)
			return share.NewUnshareInternalServerError()
		}

	} else {
		logrus.Infof("share '%v' is reserved, skipping deallocation", shrToken)
	}

	return share.NewUnshareOK()
}

func (h *unshareHandler) findServiceZId(shrToken string, edge *rest_management_api_client.ZitiEdgeManagement) (string, error) {
	filter := fmt.Sprintf("name=\"%v\"", shrToken)
	limit := int64(1)
	offset := int64(0)
	listReq := &edge_service.ListServicesParams{
		Filter:  &filter,
		Limit:   &limit,
		Offset:  &offset,
		Context: context.Background(),
	}
	listReq.SetTimeout(30 * time.Second)
	listResp, err := edge.Service.ListServices(listReq, nil)
	if err != nil {
		return "", err
	}
	if len(listResp.Payload.Data) == 1 {
		return *(listResp.Payload.Data[0].ID), nil
	}
	return "", errors.Errorf("share '%v' not found", shrToken)
}

func (h *unshareHandler) deallocateResources(senv *store.Environment, shrToken, svcZId string, edge *rest_management_api_client.ZitiEdgeManagement) error {
	if err := zrokEdgeSdk.DeleteServiceEdgeRouterPolicy(senv.ZId, shrToken, edge); err != nil {
		return err
	}
	if err := zrokEdgeSdk.DeleteServicePolicyDial(senv.ZId, shrToken, edge); err != nil {
		return err
	}
	if err := zrokEdgeSdk.DeleteServicePolicyBind(senv.ZId, shrToken, edge); err != nil {
		return err
	}
	if err := zrokEdgeSdk.DeleteConfig(senv.ZId, shrToken, edge); err != nil {
		return err
	}
	if err := zrokEdgeSdk.DeleteService(senv.ZId, svcZId, edge); err != nil {
		return err
	}
	return nil
}
