// Code generated by go-swagger; DO NOT EDIT.

package metrics

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/openziti/zrok/rest_model_zrok"
)

// GetAccountMetricsReader is a Reader for the GetAccountMetrics structure.
type GetAccountMetricsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetAccountMetricsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetAccountMetricsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewGetAccountMetricsOK creates a GetAccountMetricsOK with default headers values
func NewGetAccountMetricsOK() *GetAccountMetricsOK {
	return &GetAccountMetricsOK{}
}

/*
GetAccountMetricsOK describes a response with status code 200, with default header values.

account metrics
*/
type GetAccountMetricsOK struct {
	Payload *rest_model_zrok.Metrics
}

// IsSuccess returns true when this get account metrics o k response has a 2xx status code
func (o *GetAccountMetricsOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get account metrics o k response has a 3xx status code
func (o *GetAccountMetricsOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get account metrics o k response has a 4xx status code
func (o *GetAccountMetricsOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get account metrics o k response has a 5xx status code
func (o *GetAccountMetricsOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get account metrics o k response a status code equal to that given
func (o *GetAccountMetricsOK) IsCode(code int) bool {
	return code == 200
}

func (o *GetAccountMetricsOK) Error() string {
	return fmt.Sprintf("[GET /metrics/account][%d] getAccountMetricsOK  %+v", 200, o.Payload)
}

func (o *GetAccountMetricsOK) String() string {
	return fmt.Sprintf("[GET /metrics/account][%d] getAccountMetricsOK  %+v", 200, o.Payload)
}

func (o *GetAccountMetricsOK) GetPayload() *rest_model_zrok.Metrics {
	return o.Payload
}

func (o *GetAccountMetricsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(rest_model_zrok.Metrics)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}