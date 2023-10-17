# coding: utf-8

"""
    zrok

    zrok client access  # noqa: E501

    OpenAPI spec version: 0.3.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six

class AccessResponse(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'frontend_token': 'str',
        'backend_mode': 'str'
    }

    attribute_map = {
        'frontend_token': 'frontendToken',
        'backend_mode': 'backendMode'
    }

    def __init__(self, frontend_token=None, backend_mode=None):  # noqa: E501
        """AccessResponse - a model defined in Swagger"""  # noqa: E501
        self._frontend_token = None
        self._backend_mode = None
        self.discriminator = None
        if frontend_token is not None:
            self.frontend_token = frontend_token
        if backend_mode is not None:
            self.backend_mode = backend_mode

    @property
    def frontend_token(self):
        """Gets the frontend_token of this AccessResponse.  # noqa: E501


        :return: The frontend_token of this AccessResponse.  # noqa: E501
        :rtype: str
        """
        return self._frontend_token

    @frontend_token.setter
    def frontend_token(self, frontend_token):
        """Sets the frontend_token of this AccessResponse.


        :param frontend_token: The frontend_token of this AccessResponse.  # noqa: E501
        :type: str
        """

        self._frontend_token = frontend_token

    @property
    def backend_mode(self):
        """Gets the backend_mode of this AccessResponse.  # noqa: E501


        :return: The backend_mode of this AccessResponse.  # noqa: E501
        :rtype: str
        """
        return self._backend_mode

    @backend_mode.setter
    def backend_mode(self, backend_mode):
        """Sets the backend_mode of this AccessResponse.


        :param backend_mode: The backend_mode of this AccessResponse.  # noqa: E501
        :type: str
        """

        self._backend_mode = backend_mode

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(AccessResponse, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, AccessResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
