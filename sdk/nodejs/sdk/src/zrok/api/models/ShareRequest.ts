/* tslint:disable */
/* eslint-disable */
/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuthUser } from './AuthUser';
import {
    AuthUserFromJSON,
    AuthUserFromJSONTyped,
    AuthUserToJSON,
} from './AuthUser';

/**
 * 
 * @export
 * @interface ShareRequest
 */
export interface ShareRequest {
    /**
     * 
     * @type {string}
     * @memberof ShareRequest
     */
    envZId?: string;
    /**
     * 
     * @type {string}
     * @memberof ShareRequest
     */
    shareMode?: ShareRequestShareModeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof ShareRequest
     */
    frontendSelection?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ShareRequest
     */
    backendMode?: ShareRequestBackendModeEnum;
    /**
     * 
     * @type {string}
     * @memberof ShareRequest
     */
    backendProxyEndpoint?: string;
    /**
     * 
     * @type {string}
     * @memberof ShareRequest
     */
    authScheme?: string;
    /**
     * 
     * @type {Array<AuthUser>}
     * @memberof ShareRequest
     */
    authUsers?: Array<AuthUser>;
    /**
     * 
     * @type {string}
     * @memberof ShareRequest
     */
    oauthProvider?: ShareRequestOauthProviderEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof ShareRequest
     */
    oauthEmailDomains?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ShareRequest
     */
    oauthAuthorizationCheckInterval?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ShareRequest
     */
    reserved?: boolean;
}


/**
 * @export
 */
export const ShareRequestShareModeEnum = {
    Public: 'public',
    Private: 'private'
} as const;
export type ShareRequestShareModeEnum = typeof ShareRequestShareModeEnum[keyof typeof ShareRequestShareModeEnum];

/**
 * @export
 */
export const ShareRequestBackendModeEnum = {
    Proxy: 'proxy',
    Web: 'web',
    TcpTunnel: 'tcpTunnel',
    UdpTunnel: 'udpTunnel',
    Caddy: 'caddy'
} as const;
export type ShareRequestBackendModeEnum = typeof ShareRequestBackendModeEnum[keyof typeof ShareRequestBackendModeEnum];

/**
 * @export
 */
export const ShareRequestOauthProviderEnum = {
    Github: 'github',
    Google: 'google'
} as const;
export type ShareRequestOauthProviderEnum = typeof ShareRequestOauthProviderEnum[keyof typeof ShareRequestOauthProviderEnum];


/**
 * Check if a given object implements the ShareRequest interface.
 */
export function instanceOfShareRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShareRequestFromJSON(json: any): ShareRequest {
    return ShareRequestFromJSONTyped(json, false);
}

export function ShareRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShareRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'envZId': !exists(json, 'envZId') ? undefined : json['envZId'],
        'shareMode': !exists(json, 'shareMode') ? undefined : json['shareMode'],
        'frontendSelection': !exists(json, 'frontendSelection') ? undefined : json['frontendSelection'],
        'backendMode': !exists(json, 'backendMode') ? undefined : json['backendMode'],
        'backendProxyEndpoint': !exists(json, 'backendProxyEndpoint') ? undefined : json['backendProxyEndpoint'],
        'authScheme': !exists(json, 'authScheme') ? undefined : json['authScheme'],
        'authUsers': !exists(json, 'authUsers') ? undefined : ((json['authUsers'] as Array<any>).map(AuthUserFromJSON)),
        'oauthProvider': !exists(json, 'oauthProvider') ? undefined : json['oauthProvider'],
        'oauthEmailDomains': !exists(json, 'oauthEmailDomains') ? undefined : json['oauthEmailDomains'],
        'oauthAuthorizationCheckInterval': !exists(json, 'oauthAuthorizationCheckInterval') ? undefined : json['oauthAuthorizationCheckInterval'],
        'reserved': !exists(json, 'reserved') ? undefined : json['reserved'],
    };
}

export function ShareRequestToJSON(value?: ShareRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'envZId': value.envZId,
        'shareMode': value.shareMode,
        'frontendSelection': value.frontendSelection,
        'backendMode': value.backendMode,
        'backendProxyEndpoint': value.backendProxyEndpoint,
        'authScheme': value.authScheme,
        'authUsers': value.authUsers === undefined ? undefined : ((value.authUsers as Array<any>).map(AuthUserToJSON)),
        'oauthProvider': value.oauthProvider,
        'oauthEmailDomains': value.oauthEmailDomains,
        'oauthAuthorizationCheckInterval': value.oauthAuthorizationCheckInterval,
        'reserved': value.reserved,
    };
}
