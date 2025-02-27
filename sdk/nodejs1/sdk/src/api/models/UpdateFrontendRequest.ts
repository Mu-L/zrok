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
 * @interface UpdateFrontendRequest
 */
export interface UpdateFrontendRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateFrontendRequest
     */
    frontendToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateFrontendRequest
     */
    publicName?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateFrontendRequest
     */
    urlTemplate?: string;
}

/**
 * Check if a given object implements the UpdateFrontendRequest interface.
 */
export function instanceOfUpdateFrontendRequest(value: object): value is UpdateFrontendRequest {
    return true;
}

export function UpdateFrontendRequestFromJSON(json: any): UpdateFrontendRequest {
    return UpdateFrontendRequestFromJSONTyped(json, false);
}

export function UpdateFrontendRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFrontendRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'frontendToken': json['frontendToken'] == null ? undefined : json['frontendToken'],
        'publicName': json['publicName'] == null ? undefined : json['publicName'],
        'urlTemplate': json['urlTemplate'] == null ? undefined : json['urlTemplate'],
    };
}

export function UpdateFrontendRequestToJSON(value?: UpdateFrontendRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'frontendToken': value['frontendToken'],
        'publicName': value['publicName'],
        'urlTemplate': value['urlTemplate'],
    };
}

