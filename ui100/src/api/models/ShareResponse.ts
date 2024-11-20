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
 * @interface ShareResponse
 */
export interface ShareResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof ShareResponse
     */
    frontendProxyEndpoints?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ShareResponse
     */
    shrToken?: string;
}

/**
 * Check if a given object implements the ShareResponse interface.
 */
export function instanceOfShareResponse(value: object): value is ShareResponse {
    return true;
}

export function ShareResponseFromJSON(json: any): ShareResponse {
    return ShareResponseFromJSONTyped(json, false);
}

export function ShareResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShareResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'frontendProxyEndpoints': json['frontendProxyEndpoints'] == null ? undefined : json['frontendProxyEndpoints'],
        'shrToken': json['shrToken'] == null ? undefined : json['shrToken'],
    };
}

export function ShareResponseToJSON(value?: ShareResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'frontendProxyEndpoints': value['frontendProxyEndpoints'],
        'shrToken': value['shrToken'],
    };
}

