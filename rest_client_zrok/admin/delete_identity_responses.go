// Code generated by go-swagger; DO NOT EDIT.

package admin

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// DeleteIdentityReader is a Reader for the DeleteIdentity structure.
type DeleteIdentityReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeleteIdentityReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeleteIdentityOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 401:
		result := NewDeleteIdentityUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewDeleteIdentityNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewDeleteIdentityInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[DELETE /identity] deleteIdentity", response, response.Code())
	}
}

// NewDeleteIdentityOK creates a DeleteIdentityOK with default headers values
func NewDeleteIdentityOK() *DeleteIdentityOK {
	return &DeleteIdentityOK{}
}

/*
DeleteIdentityOK describes a response with status code 200, with default header values.

deleted
*/
type DeleteIdentityOK struct {
}

// IsSuccess returns true when this delete identity o k response has a 2xx status code
func (o *DeleteIdentityOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this delete identity o k response has a 3xx status code
func (o *DeleteIdentityOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete identity o k response has a 4xx status code
func (o *DeleteIdentityOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this delete identity o k response has a 5xx status code
func (o *DeleteIdentityOK) IsServerError() bool {
	return false
}

// IsCode returns true when this delete identity o k response a status code equal to that given
func (o *DeleteIdentityOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the delete identity o k response
func (o *DeleteIdentityOK) Code() int {
	return 200
}

func (o *DeleteIdentityOK) Error() string {
	return fmt.Sprintf("[DELETE /identity][%d] deleteIdentityOK ", 200)
}

func (o *DeleteIdentityOK) String() string {
	return fmt.Sprintf("[DELETE /identity][%d] deleteIdentityOK ", 200)
}

func (o *DeleteIdentityOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDeleteIdentityUnauthorized creates a DeleteIdentityUnauthorized with default headers values
func NewDeleteIdentityUnauthorized() *DeleteIdentityUnauthorized {
	return &DeleteIdentityUnauthorized{}
}

/*
DeleteIdentityUnauthorized describes a response with status code 401, with default header values.

unauthorized
*/
type DeleteIdentityUnauthorized struct {
}

// IsSuccess returns true when this delete identity unauthorized response has a 2xx status code
func (o *DeleteIdentityUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete identity unauthorized response has a 3xx status code
func (o *DeleteIdentityUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete identity unauthorized response has a 4xx status code
func (o *DeleteIdentityUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this delete identity unauthorized response has a 5xx status code
func (o *DeleteIdentityUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this delete identity unauthorized response a status code equal to that given
func (o *DeleteIdentityUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the delete identity unauthorized response
func (o *DeleteIdentityUnauthorized) Code() int {
	return 401
}

func (o *DeleteIdentityUnauthorized) Error() string {
	return fmt.Sprintf("[DELETE /identity][%d] deleteIdentityUnauthorized ", 401)
}

func (o *DeleteIdentityUnauthorized) String() string {
	return fmt.Sprintf("[DELETE /identity][%d] deleteIdentityUnauthorized ", 401)
}

func (o *DeleteIdentityUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDeleteIdentityNotFound creates a DeleteIdentityNotFound with default headers values
func NewDeleteIdentityNotFound() *DeleteIdentityNotFound {
	return &DeleteIdentityNotFound{}
}

/*
DeleteIdentityNotFound describes a response with status code 404, with default header values.

not found
*/
type DeleteIdentityNotFound struct {
}

// IsSuccess returns true when this delete identity not found response has a 2xx status code
func (o *DeleteIdentityNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete identity not found response has a 3xx status code
func (o *DeleteIdentityNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete identity not found response has a 4xx status code
func (o *DeleteIdentityNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this delete identity not found response has a 5xx status code
func (o *DeleteIdentityNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this delete identity not found response a status code equal to that given
func (o *DeleteIdentityNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the delete identity not found response
func (o *DeleteIdentityNotFound) Code() int {
	return 404
}

func (o *DeleteIdentityNotFound) Error() string {
	return fmt.Sprintf("[DELETE /identity][%d] deleteIdentityNotFound ", 404)
}

func (o *DeleteIdentityNotFound) String() string {
	return fmt.Sprintf("[DELETE /identity][%d] deleteIdentityNotFound ", 404)
}

func (o *DeleteIdentityNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDeleteIdentityInternalServerError creates a DeleteIdentityInternalServerError with default headers values
func NewDeleteIdentityInternalServerError() *DeleteIdentityInternalServerError {
	return &DeleteIdentityInternalServerError{}
}

/*
DeleteIdentityInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type DeleteIdentityInternalServerError struct {
}

// IsSuccess returns true when this delete identity internal server error response has a 2xx status code
func (o *DeleteIdentityInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this delete identity internal server error response has a 3xx status code
func (o *DeleteIdentityInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this delete identity internal server error response has a 4xx status code
func (o *DeleteIdentityInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this delete identity internal server error response has a 5xx status code
func (o *DeleteIdentityInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this delete identity internal server error response a status code equal to that given
func (o *DeleteIdentityInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the delete identity internal server error response
func (o *DeleteIdentityInternalServerError) Code() int {
	return 500
}

func (o *DeleteIdentityInternalServerError) Error() string {
	return fmt.Sprintf("[DELETE /identity][%d] deleteIdentityInternalServerError ", 500)
}

func (o *DeleteIdentityInternalServerError) String() string {
	return fmt.Sprintf("[DELETE /identity][%d] deleteIdentityInternalServerError ", 500)
}

func (o *DeleteIdentityInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

/*
DeleteIdentityBody delete identity body
swagger:model DeleteIdentityBody
*/
type DeleteIdentityBody struct {

	// z Id
	ZID string `json:"zId,omitempty"`
}

// Validate validates this delete identity body
func (o *DeleteIdentityBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this delete identity body based on context it is used
func (o *DeleteIdentityBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *DeleteIdentityBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *DeleteIdentityBody) UnmarshalBinary(b []byte) error {
	var res DeleteIdentityBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
