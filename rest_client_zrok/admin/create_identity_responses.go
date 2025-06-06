// Code generated by go-swagger; DO NOT EDIT.

package admin

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// CreateIdentityReader is a Reader for the CreateIdentity structure.
type CreateIdentityReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateIdentityReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 201:
		result := NewCreateIdentityCreated()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 401:
		result := NewCreateIdentityUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewCreateIdentityInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[POST /identity] createIdentity", response, response.Code())
	}
}

// NewCreateIdentityCreated creates a CreateIdentityCreated with default headers values
func NewCreateIdentityCreated() *CreateIdentityCreated {
	return &CreateIdentityCreated{}
}

/*
CreateIdentityCreated describes a response with status code 201, with default header values.

created
*/
type CreateIdentityCreated struct {
	Payload *CreateIdentityCreatedBody
}

// IsSuccess returns true when this create identity created response has a 2xx status code
func (o *CreateIdentityCreated) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this create identity created response has a 3xx status code
func (o *CreateIdentityCreated) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create identity created response has a 4xx status code
func (o *CreateIdentityCreated) IsClientError() bool {
	return false
}

// IsServerError returns true when this create identity created response has a 5xx status code
func (o *CreateIdentityCreated) IsServerError() bool {
	return false
}

// IsCode returns true when this create identity created response a status code equal to that given
func (o *CreateIdentityCreated) IsCode(code int) bool {
	return code == 201
}

// Code gets the status code for the create identity created response
func (o *CreateIdentityCreated) Code() int {
	return 201
}

func (o *CreateIdentityCreated) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /identity][%d] createIdentityCreated %s", 201, payload)
}

func (o *CreateIdentityCreated) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /identity][%d] createIdentityCreated %s", 201, payload)
}

func (o *CreateIdentityCreated) GetPayload() *CreateIdentityCreatedBody {
	return o.Payload
}

func (o *CreateIdentityCreated) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(CreateIdentityCreatedBody)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateIdentityUnauthorized creates a CreateIdentityUnauthorized with default headers values
func NewCreateIdentityUnauthorized() *CreateIdentityUnauthorized {
	return &CreateIdentityUnauthorized{}
}

/*
CreateIdentityUnauthorized describes a response with status code 401, with default header values.

unauthorized
*/
type CreateIdentityUnauthorized struct {
}

// IsSuccess returns true when this create identity unauthorized response has a 2xx status code
func (o *CreateIdentityUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this create identity unauthorized response has a 3xx status code
func (o *CreateIdentityUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create identity unauthorized response has a 4xx status code
func (o *CreateIdentityUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this create identity unauthorized response has a 5xx status code
func (o *CreateIdentityUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this create identity unauthorized response a status code equal to that given
func (o *CreateIdentityUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the create identity unauthorized response
func (o *CreateIdentityUnauthorized) Code() int {
	return 401
}

func (o *CreateIdentityUnauthorized) Error() string {
	return fmt.Sprintf("[POST /identity][%d] createIdentityUnauthorized", 401)
}

func (o *CreateIdentityUnauthorized) String() string {
	return fmt.Sprintf("[POST /identity][%d] createIdentityUnauthorized", 401)
}

func (o *CreateIdentityUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewCreateIdentityInternalServerError creates a CreateIdentityInternalServerError with default headers values
func NewCreateIdentityInternalServerError() *CreateIdentityInternalServerError {
	return &CreateIdentityInternalServerError{}
}

/*
CreateIdentityInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type CreateIdentityInternalServerError struct {
}

// IsSuccess returns true when this create identity internal server error response has a 2xx status code
func (o *CreateIdentityInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this create identity internal server error response has a 3xx status code
func (o *CreateIdentityInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create identity internal server error response has a 4xx status code
func (o *CreateIdentityInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this create identity internal server error response has a 5xx status code
func (o *CreateIdentityInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this create identity internal server error response a status code equal to that given
func (o *CreateIdentityInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the create identity internal server error response
func (o *CreateIdentityInternalServerError) Code() int {
	return 500
}

func (o *CreateIdentityInternalServerError) Error() string {
	return fmt.Sprintf("[POST /identity][%d] createIdentityInternalServerError", 500)
}

func (o *CreateIdentityInternalServerError) String() string {
	return fmt.Sprintf("[POST /identity][%d] createIdentityInternalServerError", 500)
}

func (o *CreateIdentityInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

/*
CreateIdentityBody create identity body
swagger:model CreateIdentityBody
*/
type CreateIdentityBody struct {

	// name
	Name string `json:"name,omitempty"`
}

// Validate validates this create identity body
func (o *CreateIdentityBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this create identity body based on context it is used
func (o *CreateIdentityBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *CreateIdentityBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *CreateIdentityBody) UnmarshalBinary(b []byte) error {
	var res CreateIdentityBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

/*
CreateIdentityCreatedBody create identity created body
swagger:model CreateIdentityCreatedBody
*/
type CreateIdentityCreatedBody struct {

	// cfg
	Cfg string `json:"cfg,omitempty"`

	// identity
	Identity string `json:"identity,omitempty"`
}

// Validate validates this create identity created body
func (o *CreateIdentityCreatedBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this create identity created body based on context it is used
func (o *CreateIdentityCreatedBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *CreateIdentityCreatedBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *CreateIdentityCreatedBody) UnmarshalBinary(b []byte) error {
	var res CreateIdentityCreatedBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
