/* tslint:disable */
/* eslint-disable */
/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ChangePasswordRequest,
  InviteRequest,
  LoginRequest,
  RegenerateToken200Response,
  RegenerateTokenRequest,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  VerifyRequest,
  VerifyResponse,
} from '../models/index';
import {
    ChangePasswordRequestFromJSON,
    ChangePasswordRequestToJSON,
    InviteRequestFromJSON,
    InviteRequestToJSON,
    LoginRequestFromJSON,
    LoginRequestToJSON,
    RegenerateToken200ResponseFromJSON,
    RegenerateToken200ResponseToJSON,
    RegenerateTokenRequestFromJSON,
    RegenerateTokenRequestToJSON,
    RegisterRequestFromJSON,
    RegisterRequestToJSON,
    RegisterResponseFromJSON,
    RegisterResponseToJSON,
    ResetPasswordRequestFromJSON,
    ResetPasswordRequestToJSON,
    VerifyRequestFromJSON,
    VerifyRequestToJSON,
    VerifyResponseFromJSON,
    VerifyResponseToJSON,
} from '../models/index';

export interface ChangePasswordOperationRequest {
    body?: ChangePasswordRequest;
}

export interface InviteOperationRequest {
    body?: InviteRequest;
}

export interface LoginOperationRequest {
    body?: LoginRequest;
}

export interface RegenerateTokenOperationRequest {
    body?: RegenerateTokenRequest;
}

export interface RegisterOperationRequest {
    body?: RegisterRequest;
}

export interface ResetPasswordOperationRequest {
    body?: ResetPasswordRequest;
}

export interface ResetPasswordRequestRequest {
    body?: RegenerateTokenRequest;
}

export interface VerifyOperationRequest {
    body?: VerifyRequest;
}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI {

    /**
     */
    async changePasswordRaw(requestParameters: ChangePasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/changePassword`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ChangePasswordRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async changePassword(requestParameters: ChangePasswordOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.changePasswordRaw(requestParameters, initOverrides);
    }

    /**
     */
    async inviteRaw(requestParameters: InviteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/invite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InviteRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async invite(requestParameters: InviteOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.inviteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async loginRaw(requestParameters: LoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginRequestToJSON(requestParameters['body']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async login(requestParameters: LoginOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async regenerateTokenRaw(requestParameters: RegenerateTokenOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegenerateToken200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/regenerateToken`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegenerateTokenRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RegenerateToken200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async regenerateToken(requestParameters: RegenerateTokenOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegenerateToken200Response> {
        const response = await this.regenerateTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async registerRaw(requestParameters: RegisterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegisterResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RegisterResponseFromJSON(jsonValue));
    }

    /**
     */
    async register(requestParameters: RegisterOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegisterResponse> {
        const response = await this.registerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async resetPasswordRaw(requestParameters: ResetPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/resetPassword`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ResetPasswordRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async resetPassword(requestParameters: ResetPasswordOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resetPasswordRaw(requestParameters, initOverrides);
    }

    /**
     */
    async resetPasswordRequestRaw(requestParameters: ResetPasswordRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/resetPasswordRequest`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegenerateTokenRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async resetPasswordRequest(requestParameters: ResetPasswordRequestRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resetPasswordRequestRaw(requestParameters, initOverrides);
    }

    /**
     */
    async verifyRaw(requestParameters: VerifyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VerifyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/verify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VerifyRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
    }

    /**
     */
    async verify(requestParameters: VerifyOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VerifyResponse> {
        const response = await this.verifyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
