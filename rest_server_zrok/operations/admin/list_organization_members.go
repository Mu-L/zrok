// Code generated by go-swagger; DO NOT EDIT.

package admin

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"context"
	"net/http"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"

	"github.com/openziti/zrok/rest_model_zrok"
)

// ListOrganizationMembersHandlerFunc turns a function with the right signature into a list organization members handler
type ListOrganizationMembersHandlerFunc func(ListOrganizationMembersParams, *rest_model_zrok.Principal) middleware.Responder

// Handle executing the request and returning a response
func (fn ListOrganizationMembersHandlerFunc) Handle(params ListOrganizationMembersParams, principal *rest_model_zrok.Principal) middleware.Responder {
	return fn(params, principal)
}

// ListOrganizationMembersHandler interface for that can handle valid list organization members params
type ListOrganizationMembersHandler interface {
	Handle(ListOrganizationMembersParams, *rest_model_zrok.Principal) middleware.Responder
}

// NewListOrganizationMembers creates a new http.Handler for the list organization members operation
func NewListOrganizationMembers(ctx *middleware.Context, handler ListOrganizationMembersHandler) *ListOrganizationMembers {
	return &ListOrganizationMembers{Context: ctx, Handler: handler}
}

/*
	ListOrganizationMembers swagger:route POST /organization/list admin listOrganizationMembers

ListOrganizationMembers list organization members API
*/
type ListOrganizationMembers struct {
	Context *middleware.Context
	Handler ListOrganizationMembersHandler
}

func (o *ListOrganizationMembers) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		*r = *rCtx
	}
	var Params = NewListOrganizationMembersParams()
	uprinc, aCtx, err := o.Context.Authorize(r, route)
	if err != nil {
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}
	if aCtx != nil {
		*r = *aCtx
	}
	var principal *rest_model_zrok.Principal
	if uprinc != nil {
		principal = uprinc.(*rest_model_zrok.Principal) // this is really a rest_model_zrok.Principal, I promise
	}

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params, principal) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}

// ListOrganizationMembersBody list organization members body
//
// swagger:model ListOrganizationMembersBody
type ListOrganizationMembersBody struct {

	// organization token
	OrganizationToken string `json:"organizationToken,omitempty"`
}

// Validate validates this list organization members body
func (o *ListOrganizationMembersBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this list organization members body based on context it is used
func (o *ListOrganizationMembersBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *ListOrganizationMembersBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *ListOrganizationMembersBody) UnmarshalBinary(b []byte) error {
	var res ListOrganizationMembersBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

// ListOrganizationMembersOKBody list organization members o k body
//
// swagger:model ListOrganizationMembersOKBody
type ListOrganizationMembersOKBody struct {

	// members
	Members []*ListOrganizationMembersOKBodyMembersItems0 `json:"members"`
}

// Validate validates this list organization members o k body
func (o *ListOrganizationMembersOKBody) Validate(formats strfmt.Registry) error {
	var res []error

	if err := o.validateMembers(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *ListOrganizationMembersOKBody) validateMembers(formats strfmt.Registry) error {
	if swag.IsZero(o.Members) { // not required
		return nil
	}

	for i := 0; i < len(o.Members); i++ {
		if swag.IsZero(o.Members[i]) { // not required
			continue
		}

		if o.Members[i] != nil {
			if err := o.Members[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("listOrganizationMembersOK" + "." + "members" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("listOrganizationMembersOK" + "." + "members" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this list organization members o k body based on the context it is used
func (o *ListOrganizationMembersOKBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := o.contextValidateMembers(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *ListOrganizationMembersOKBody) contextValidateMembers(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(o.Members); i++ {

		if o.Members[i] != nil {

			if swag.IsZero(o.Members[i]) { // not required
				return nil
			}

			if err := o.Members[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("listOrganizationMembersOK" + "." + "members" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("listOrganizationMembersOK" + "." + "members" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (o *ListOrganizationMembersOKBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *ListOrganizationMembersOKBody) UnmarshalBinary(b []byte) error {
	var res ListOrganizationMembersOKBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

// ListOrganizationMembersOKBodyMembersItems0 list organization members o k body members items0
//
// swagger:model ListOrganizationMembersOKBodyMembersItems0
type ListOrganizationMembersOKBodyMembersItems0 struct {

	// admin
	Admin bool `json:"admin,omitempty"`

	// email
	Email string `json:"email,omitempty"`
}

// Validate validates this list organization members o k body members items0
func (o *ListOrganizationMembersOKBodyMembersItems0) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this list organization members o k body members items0 based on context it is used
func (o *ListOrganizationMembersOKBodyMembersItems0) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *ListOrganizationMembersOKBodyMembersItems0) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *ListOrganizationMembersOKBodyMembersItems0) UnmarshalBinary(b []byte) error {
	var res ListOrganizationMembersOKBodyMembersItems0
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
