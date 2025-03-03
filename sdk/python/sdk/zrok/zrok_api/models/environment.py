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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from zrok_api.models.spark_data_sample import SparkDataSample
from typing import Optional, Set
from typing_extensions import Self

class Environment(BaseModel):
    """
    Environment
    """ # noqa: E501
    description: Optional[StrictStr] = None
    host: Optional[StrictStr] = None
    address: Optional[StrictStr] = None
    z_id: Optional[StrictStr] = Field(default=None, alias="zId")
    activity: Optional[List[SparkDataSample]] = None
    limited: Optional[StrictBool] = None
    created_at: Optional[StrictInt] = Field(default=None, alias="createdAt")
    updated_at: Optional[StrictInt] = Field(default=None, alias="updatedAt")
    __properties: ClassVar[List[str]] = ["description", "host", "address", "zId", "activity", "limited", "createdAt", "updatedAt"]

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
        """Create an instance of Environment from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in activity (list)
        _items = []
        if self.activity:
            for _item in self.activity:
                if _item:
                    _items.append(_item.to_dict())
            _dict['activity'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Environment from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "description": obj.get("description"),
            "host": obj.get("host"),
            "address": obj.get("address"),
            "zId": obj.get("zId"),
            "activity": [SparkDataSample.from_dict(_item) for _item in obj["activity"]] if obj.get("activity") is not None else None,
            "limited": obj.get("limited"),
            "createdAt": obj.get("createdAt"),
            "updatedAt": obj.get("updatedAt")
        })
        return _obj


