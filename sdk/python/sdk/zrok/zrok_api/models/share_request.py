# coding: utf-8

"""
    zrok

    zrok client access

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from zrok_api.models.auth_user import AuthUser
from typing import Optional, Set
from typing_extensions import Self

class ShareRequest(BaseModel):
    """
    ShareRequest
    """ # noqa: E501
    env_zid: Optional[StrictStr] = Field(default=None, alias="envZId")
    share_mode: Optional[StrictStr] = Field(default=None, alias="shareMode")
    frontend_selection: Optional[List[StrictStr]] = Field(default=None, alias="frontendSelection")
    backend_mode: Optional[StrictStr] = Field(default=None, alias="backendMode")
    backend_proxy_endpoint: Optional[StrictStr] = Field(default=None, alias="backendProxyEndpoint")
    auth_scheme: Optional[StrictStr] = Field(default=None, alias="authScheme")
    auth_users: Optional[List[AuthUser]] = Field(default=None, alias="authUsers")
    oauth_provider: Optional[StrictStr] = Field(default=None, alias="oauthProvider")
    oauth_email_domains: Optional[List[StrictStr]] = Field(default=None, alias="oauthEmailDomains")
    oauth_authorization_check_interval: Optional[StrictStr] = Field(default=None, alias="oauthAuthorizationCheckInterval")
    reserved: Optional[StrictBool] = None
    permission_mode: Optional[StrictStr] = Field(default=None, alias="permissionMode")
    access_grants: Optional[List[StrictStr]] = Field(default=None, alias="accessGrants")
    unique_name: Optional[StrictStr] = Field(default=None, alias="uniqueName")
    __properties: ClassVar[List[str]] = ["envZId", "shareMode", "frontendSelection", "backendMode", "backendProxyEndpoint", "authScheme", "authUsers", "oauthProvider", "oauthEmailDomains", "oauthAuthorizationCheckInterval", "reserved", "permissionMode", "accessGrants", "uniqueName"]

    @field_validator('share_mode')
    def share_mode_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['public', 'private']):
            raise ValueError("must be one of enum values ('public', 'private')")
        return value

    @field_validator('backend_mode')
    def backend_mode_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['proxy', 'web', 'tcpTunnel', 'udpTunnel', 'caddy', 'drive', 'socks', 'vpn']):
            raise ValueError("must be one of enum values ('proxy', 'web', 'tcpTunnel', 'udpTunnel', 'caddy', 'drive', 'socks', 'vpn')")
        return value

    @field_validator('oauth_provider')
    def oauth_provider_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['github', 'google']):
            raise ValueError("must be one of enum values ('github', 'google')")
        return value

    @field_validator('permission_mode')
    def permission_mode_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['open', 'closed']):
            raise ValueError("must be one of enum values ('open', 'closed')")
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of ShareRequest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in auth_users (list)
        _items = []
        if self.auth_users:
            for _item in self.auth_users:
                if _item:
                    _items.append(_item.to_dict())
            _dict['authUsers'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ShareRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "envZId": obj.get("envZId"),
            "shareMode": obj.get("shareMode"),
            "frontendSelection": obj.get("frontendSelection"),
            "backendMode": obj.get("backendMode"),
            "backendProxyEndpoint": obj.get("backendProxyEndpoint"),
            "authScheme": obj.get("authScheme"),
            "authUsers": [AuthUser.from_dict(_item) for _item in obj["authUsers"]] if obj.get("authUsers") is not None else None,
            "oauthProvider": obj.get("oauthProvider"),
            "oauthEmailDomains": obj.get("oauthEmailDomains"),
            "oauthAuthorizationCheckInterval": obj.get("oauthAuthorizationCheckInterval"),
            "reserved": obj.get("reserved"),
            "permissionMode": obj.get("permissionMode"),
            "accessGrants": obj.get("accessGrants"),
            "uniqueName": obj.get("uniqueName")
        })
        return _obj


