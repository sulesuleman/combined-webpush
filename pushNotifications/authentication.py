from rest_framework import exceptions
from rest_framework.authtoken.models import Token
from rest_framework.authentication import BaseAuthentication, \
    get_authorization_header

from django.utils.translation import ugettext_lazy as _

from Accounts.models import Website

class SDKTokenAuthentication(BaseAuthentication):
    """
    Simple Sdk Token based authentication.

    Clients should authenticate by passing the token key in the "Authorization"
    HTTP header, prepended with the string "SDK-Token".  For example:

        Authorization: SDK-Token WK-SDK-78SKGRBPI410EH
    """

    keyword = 'SDK-Token'
    model = Website

    def get_model(self):
        if self.model is not None:
            return self.model
        return Token

    """
    A custom token model may be used, but must have the following properties.

    * key -- The string identifying the token
    * user -- The user to which the token belongs
    """

    def authenticate(self, request):
        auth = get_authorization_header(request).split()

        if not auth or auth[0].lower() != self.keyword.lower().encode():
            return None

        if len(auth) == 1:
            msg = _('Invalid SDK token header. No credentials provided.')
            raise exceptions.AuthenticationFailed(msg)
        elif len(auth) > 2:
            msg = _('Invalid SDK token header. Token string should not contain spaces.')
            raise exceptions.AuthenticationFailed(msg)

        try:
            token = auth[1].decode()
        except UnicodeError:
            msg = _('Invalid SDK token header. Token string should not contain invalid characters.')
            raise exceptions.AuthenticationFailed(msg)

        return self.authenticate_credentials(token)

    def authenticate_credentials(self, key):
        model = self.get_model()
        try:
            website = model.objects.select_related('user').get(sdk_auth_key=key)
        except model.DoesNotExist:
            raise exceptions.AuthenticationFailed(_('Invalid SDK token.'))

        #if not website.user.account.status == AccountStatus.ACTIVE:
         #   raise exceptions.AuthenticationFailed(_('Account inactive or deleted.'))

        #return (website.user, website)

    def authenticate_header(self, request):
        return self.keyword
