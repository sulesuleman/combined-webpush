from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, renderers
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from django.utils.translation import ugettext_lazy as _
from django.shortcuts import get_object_or_404

from allauth.account.models import EmailAddress

from .permissions import HasWebsiteFullAccess, HasWebsite
from Accounts.models import DesktopPrompt, MobilePrompt,\
    GDPRPrompt, Website
from Accounts.serializers import WebsiteSerializer, ExtraDesktopPromptSerializer, \
    ExtraMobilePromptSerializer, ExtraGDPRPromptSerializer, EmailSettingSerializer,\
        EmailSetting
from Accounts.serializers import ResendEmailVerificationSerializer


class DesktopPromptViewSet(viewsets.GenericViewSet,
                           mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin):
    permission_classes = [IsAuthenticated, HasWebsite, HasWebsiteFullAccess]
    queryset = DesktopPrompt.objects.all()
    serializer_class = ExtraDesktopPromptSerializer


class MobilePromptViewSet(viewsets.GenericViewSet,
                          mixins.RetrieveModelMixin,
                          mixins.UpdateModelMixin):
    permission_classes = [IsAuthenticated, HasWebsite, HasWebsiteFullAccess]
    queryset = MobilePrompt.objects.all()
    serializer_class = ExtraMobilePromptSerializer


class GDPRPromptViewSet(viewsets.GenericViewSet,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin):
    permission_classes = [IsAuthenticated, HasWebsite, HasWebsiteFullAccess ]
    queryset = GDPRPrompt.objects.all()
    serializer_class = ExtraGDPRPromptSerializer


class WebsiteViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated,]
    serializer_class = WebsiteSerializer
    pagination_class = None
    queryset = Website.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EmailSettingViewSet(viewsets.GenericViewSet,
                          mixins.RetrieveModelMixin,
                          mixins.UpdateModelMixin):
    permission_classes = [IsAuthenticated]
    serializer_class = EmailSettingSerializer

    def get_object(self):
        if hasattr(self.request.user, 'emailsetting'):
            return self.request.user.emailsetting
        else:
            return EmailSetting.objects.create\
                (user=self.request.user)


class ResendEmailVerification(GenericAPIView):
    serializer_class = ResendEmailVerificationSerializer
    permission_classes = (AllowAny,)
    allowed_methods = ('POST', 'OPTIONS', 'HEAD')

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data['email']

        try:
            email_address = EmailAddress.objects.get(email__exact=email, verified=False)
            email_address.send_confirmation(self.request, True)
        except EmailAddress.DoesNotExist:
            pass

        return Response({'detail': _('Verification e-mail sent.')})
