# coding: utf-8

"""
    zrok

    zrok client access  # noqa: E501

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six

class InlineResponse2006Memberships(object):
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
        'organization_token': 'str',
        'description': 'str',
        'admin': 'bool'
    }

    attribute_map = {
        'organization_token': 'organizationToken',
        'description': 'description',
        'admin': 'admin'
    }

    def __init__(self, organization_token=None, description=None, admin=None):  # noqa: E501
        """InlineResponse2006Memberships - a model defined in Swagger"""  # noqa: E501
        self._organization_token = None
        self._description = None
        self._admin = None
        self.discriminator = None
        if organization_token is not None:
            self.organization_token = organization_token
        if description is not None:
            self.description = description
        if admin is not None:
            self.admin = admin

    @property
    def organization_token(self):
        """Gets the organization_token of this InlineResponse2006Memberships.  # noqa: E501


        :return: The organization_token of this InlineResponse2006Memberships.  # noqa: E501
        :rtype: str
        """
        return self._organization_token

    @organization_token.setter
    def organization_token(self, organization_token):
        """Sets the organization_token of this InlineResponse2006Memberships.


        :param organization_token: The organization_token of this InlineResponse2006Memberships.  # noqa: E501
        :type: str
        """

        self._organization_token = organization_token

    @property
    def description(self):
        """Gets the description of this InlineResponse2006Memberships.  # noqa: E501


        :return: The description of this InlineResponse2006Memberships.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this InlineResponse2006Memberships.


        :param description: The description of this InlineResponse2006Memberships.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def admin(self):
        """Gets the admin of this InlineResponse2006Memberships.  # noqa: E501


        :return: The admin of this InlineResponse2006Memberships.  # noqa: E501
        :rtype: bool
        """
        return self._admin

    @admin.setter
    def admin(self, admin):
        """Sets the admin of this InlineResponse2006Memberships.


        :param admin: The admin of this InlineResponse2006Memberships.  # noqa: E501
        :type: bool
        """

        self._admin = admin

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
        if issubclass(InlineResponse2006Memberships, dict):
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
        if not isinstance(other, InlineResponse2006Memberships):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
