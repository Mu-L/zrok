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
 * @interface AccessRequest
 */
export interface AccessRequest {
    /**
     * 
     * @type {string}
     * @memberof AccessRequest
     */
    envZId?: string;
    /**
     * 
     * @type {string}
     * @memberof AccessRequest
     */
    shareToken?: string;
    /**
     * 
     * @type {string}
     * @memberof AccessRequest
     */
    bindAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof AccessRequest
     */
    description?: string;
}

/**
 * Check if a given object implements the AccessRequest interface.
 */
export function instanceOfAccessRequest(value: object): value is AccessRequest {
    return true;
}

export function AccessRequestFromJSON(json: any): AccessRequest {
    return AccessRequestFromJSONTyped(json, false);
}

export function AccessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'envZId': json['envZId'] == null ? undefined : json['envZId'],
        'shareToken': json['shareToken'] == null ? undefined : json['shareToken'],
        'bindAddress': json['bindAddress'] == null ? undefined : json['bindAddress'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function AccessRequestToJSON(value?: AccessRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'envZId': value['envZId'],
        'shareToken': value['shareToken'],
        'bindAddress': value['bindAddress'],
        'description': value['description'],
    };
}

