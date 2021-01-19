from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from allauth.account.models import EmailAddress
from rest_framework.exceptions import ValidationError

# from accounts.helpers import verify_service_worker_url, \
#     set_all_integration_files
from accounts.models import DesktopPrompt,\
    MobilePrompt, GDPRPrompt, Website, EmailSetting


try:
    from allauth.account import app_settings as allauth_settings
    from allauth.utils import (email_address_exists,
                               get_username_max_length)
    from allauth.account.adapter import get_adapter
    from allauth.account.utils import setup_user_email
    from allauth.socialaccount.helpers import complete_social_login
    from allauth.socialaccount.models import SocialAccount
    from allauth.socialaccount.providers.base import AuthProcess
except ImportError:
    raise ImportError("allauth needs to be added to INSTALLED_APPS.")


UserModel = get_user_model()


class CustomRegisterSerializer(serializers.Serializer):
    """
    This serializer is copied from rest_auth.registration.RegisterSerializer
    removing username field
    """
    first_name = serializers.CharField(max_length=30, required=False)
    last_name = serializers.CharField(max_length=30, required=False)
    email = serializers.EmailField(required=allauth_settings.EMAIL_REQUIRED)
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def validate_password1(self, password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError(_("The two password fields didn't match."))
        return data

    def custom_signup(self, request, user):
        pass

    def get_cleaned_data(self):
        return {
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        self.custom_signup(request, user)
        setup_user_email(request, user, [])
        return user


class UserDetailsSerializer(serializers.ModelSerializer):
    """
    User model w/o password - Imported from rest_auth.serializers
    removed username field
    """

    class Meta:
        model = UserModel
        fields = ('id', 'email', 'first_name', 'last_name',)
        read_only_fields = ('email', )


class TokenSerializer(serializers.ModelSerializer):
    user = UserDetailsSerializer(many=False, read_only=True)

    class Meta:
        model = Token
        fields = ('key', 'user',)


class ResendEmailVerificationSerializer(serializers.Serializer):
    email = serializers.EmailField()


class GDPRPromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = GDPRPrompt
        exclude = ('website', 'enabled')


class MobilePromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = MobilePrompt
        exclude = ('website', 'enabled')


class DesktopPromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesktopPrompt
        exclude = ('website', 'enabled')


class WebsiteSerializer(serializers.ModelSerializer):
    gdpr_prompt = GDPRPromptSerializer(read_only=True, source='gdprprompt')
    desktop_prompt = DesktopPromptSerializer(read_only=True, source='desktopprompt')
    mobile_prompt = MobilePromptSerializer(read_only=True, source='mobileprompt')
    logo128 = serializers.ImageField(read_only=True)

    # def validate_service_worker_path(self, value):
    #     verified = verify_service_worker_url(
    #         url=self.instance.url + value
    #     )
    #     if not verified:
    #         raise ValidationError(_("Server Couldn't validate Service Worker file on provided path"))
    #     return value
    #
    # def validate(self, attrs):
    #     attrs = super(WebsiteSerializer, self).validate(attrs)
    #     if attrs.get('service_worker_verified', False):
    #         self.validate_service_worker_path(attrs.get('service_worker_path', self.instance.service_worker_path))
    #     return attrs

    class Meta:
        model = Website
        fields = ('id', 'user', 'url', 'title', 'website_key', 'created_at', 'updated_at', 'logo',
                  'logo128', 'start_mode', 'start_mode_value', 'start_mode_urls',
                  'rest_api_key', 'sdk_auth_key', 'rest_api_key_enabled', 'page_tracking',
                  'gdpr_prompt', 'desktop_prompt', 'branding', 'mobile_prompt',
                  # 'manifest_json','service_worker_js', 'sdk_js',  'service_worker_verified', 'service_worker_path',
                 )
        extra_kwargs = {
            'user': {'read_only': True},
            'website_key': {'read_only': True},
            'created_at': {'read_only': True},
            'updated_at': {'read_only': True},
            # 'manifest_json': {'read_only': True},
            # 'service_worker_js': {'read_only': True},
            # 'service_worker_path': {'read_only': True},
            # 'service_worker_verified': {'read_only': True},
            # 'sdk_js': {'read_only': True},

        }

    def update(self, instance, validated_data):
        instance = super(WebsiteSerializer, self).update(instance, validated_data)
        # set_all_integration_files(instance)
        return instance


# ToDo Need to think this through (below 4 classes)
#  -- made this on request on shoaib
class BaseListPromptSerializer(serializers.ModelSerializer):
    website = WebsiteSerializer(many=False, read_only=True)

    class Meta:
        ...


class ExtraDesktopPromptSerializer(BaseListPromptSerializer):
    class Meta(BaseListPromptSerializer.Meta):
        model = DesktopPrompt

    def update(self, instance, validated_data):
        instance = super(ExtraDesktopPromptSerializer, self).update(instance, validated_data)
        # set_all_integration_files(instance.website)
        return instance


class ExtraMobilePromptSerializer(BaseListPromptSerializer):
    class Meta(BaseListPromptSerializer.Meta):
        model = MobilePrompt

    def update(self, instance, validated_data):
        instance = super(ExtraMobilePromptSerializer, self).update(instance, validated_data)
        # set_all_integration_files(instance.website)
        return instance


class ExtraGDPRPromptSerializer(BaseListPromptSerializer):
    class Meta(BaseListPromptSerializer.Meta):
        model = GDPRPrompt

    def update(self, instance, validated_data):
        instance = super(ExtraGDPRPromptSerializer, self).update(instance, validated_data)
        # set_all_integration_files(instance.website)
        return instance


class EmailSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailSetting
        exclude = ('user',)

