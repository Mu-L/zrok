# coding: utf-8

"""
    zrok

    zrok client access

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from zrok_api.models.access_request import AccessRequest

class TestAccessRequest(unittest.TestCase):
    """AccessRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> AccessRequest:
        """Test AccessRequest
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `AccessRequest`
        """
        model = AccessRequest()
        if include_optional:
            return AccessRequest(
                env_zid = '',
                share_token = '',
                bind_address = '',
                description = ''
            )
        else:
            return AccessRequest(
        )
        """

    def testAccessRequest(self):
        """Test AccessRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
