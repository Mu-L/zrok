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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UnaccessRequest
 */
export interface UnaccessRequest {
    /**
     * 
     * @type {string}
     * @memberof UnaccessRequest
     */
    frontendToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UnaccessRequest
     */
    envZId?: string;
    /**
     * 
     * @type {string}
     * @memberof UnaccessRequest
     */
    shareToken?: string;
}

/**
 * Check if a given object implements the UnaccessRequest interface.
 */
export function instanceOfUnaccessRequest(value: object): value is UnaccessRequest {
    return true;
}

export function UnaccessRequestFromJSON(json: any): UnaccessRequest {
    return UnaccessRequestFromJSONTyped(json, false);
}

export function UnaccessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnaccessRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'frontendToken': json['frontendToken'] == null ? undefined : json['frontendToken'],
        'envZId': json['envZId'] == null ? undefined : json['envZId'],
        'shareToken': json['shareToken'] == null ? undefined : json['shareToken'],
    };
}

export function UnaccessRequestToJSON(json: any): UnaccessRequest {
    return UnaccessRequestToJSONTyped(json, false);
}

export function UnaccessRequestToJSONTyped(value?: UnaccessRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'frontendToken': value['frontendToken'],
        'envZId': value['envZId'],
        'shareToken': value['shareToken'],
    };
}

