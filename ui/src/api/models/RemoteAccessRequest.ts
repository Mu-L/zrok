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
 * @interface RemoteAccessRequest
 */
export interface RemoteAccessRequest {
    /**
     * 
     * @type {string}
     * @memberof RemoteAccessRequest
     */
    envZId?: string;
    /**
     * 
     * @type {string}
     * @memberof RemoteAccessRequest
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof RemoteAccessRequest
     */
    bindAddress?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RemoteAccessRequest
     */
    autoMode?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RemoteAccessRequest
     */
    autoAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof RemoteAccessRequest
     */
    autoStartPort?: number;
    /**
     * 
     * @type {number}
     * @memberof RemoteAccessRequest
     */
    autoEndPort?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof RemoteAccessRequest
     */
    responseHeaders?: Array<string>;
}

/**
 * Check if a given object implements the RemoteAccessRequest interface.
 */
export function instanceOfRemoteAccessRequest(value: object): value is RemoteAccessRequest {
    return true;
}

export function RemoteAccessRequestFromJSON(json: any): RemoteAccessRequest {
    return RemoteAccessRequestFromJSONTyped(json, false);
}

export function RemoteAccessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoteAccessRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'envZId': json['envZId'] == null ? undefined : json['envZId'],
        'token': json['token'] == null ? undefined : json['token'],
        'bindAddress': json['bindAddress'] == null ? undefined : json['bindAddress'],
        'autoMode': json['autoMode'] == null ? undefined : json['autoMode'],
        'autoAddress': json['autoAddress'] == null ? undefined : json['autoAddress'],
        'autoStartPort': json['autoStartPort'] == null ? undefined : json['autoStartPort'],
        'autoEndPort': json['autoEndPort'] == null ? undefined : json['autoEndPort'],
        'responseHeaders': json['responseHeaders'] == null ? undefined : json['responseHeaders'],
    };
}

export function RemoteAccessRequestToJSON(json: any): RemoteAccessRequest {
    return RemoteAccessRequestToJSONTyped(json, false);
}

export function RemoteAccessRequestToJSONTyped(value?: RemoteAccessRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'envZId': value['envZId'],
        'token': value['token'],
        'bindAddress': value['bindAddress'],
        'autoMode': value['autoMode'],
        'autoAddress': value['autoAddress'],
        'autoStartPort': value['autoStartPort'],
        'autoEndPort': value['autoEndPort'],
        'responseHeaders': value['responseHeaders'],
    };
}

