import json
from django.db import models
from django.db.models.signals import post_save
from django.utils.translation import ugettext_lazy as _
from django.db import transaction
from django.contrib.postgres.fields import JSONField
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
from custom_user.models import AbstractEmailUser

from Accounts.helpers import set_all_integration_files
from Accounts.utils import generate_website_rest_api_key, \
    generate_vapid_keypair, generate_website_sdk_auth_key, \
    get_website_logo_path
from Accounts.choices import StartMode, GDPRPromptPosition,\
    MobilePromptPosition, DesktopPromptPosition, ReportsInterval
from Accounts.utils import generate_website_key
from Accounts.abstract import UserOneToOne, TimeStampedFields, BasePrompt


class User(AbstractEmailUser):
    """Base user model"""
    first_name = models.CharField(_('First name'), max_length=30, blank=True)
    last_name = models.CharField(_('Last name'), max_length=30, blank=True)

    USER_MODEL_USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name',]

    def __str__(self):
        return '%s' % (self.email,)


class EmailSetting(UserOneToOne, TimeStampedFields):
    reports_interval = models.CharField(max_length=4, choices=ReportsInterval.choices,
                                        default=ReportsInterval.WEEKLY)

    def __str__(self):
        return '%s : %s' % (self.user.email, self.reports_interval)


class Website(UserOneToOne, TimeStampedFields):
    # General Fields
    url = models.URLField()
    title = models.CharField(max_length=30)
    website_key = models.CharField(max_length=30, unique=True,
                                    default=generate_website_key)
    # ToDo Need logo auto converters
    logo = models.ImageField(upload_to=get_website_logo_path)
    logo128_2x = ImageSpecField(
        source='logo', processors=[ResizeToFill(256, 256)], format='PNG', options={'quality': 60})
    logo128 = ImageSpecField(
        source='logo', processors=[ResizeToFill(128, 128)], format='PNG', options={'quality': 60})
    logo32_2x = ImageSpecField(
        source='logo', processors=[ResizeToFill(64, 64)], format='PNG', options={'quality': 60})
    logo32 = ImageSpecField(
        source='logo', processors=[ResizeToFill(32, 32)], format='PNG', options={'quality': 60})
    logo16_2x = ImageSpecField(
        source='logo', processors=[ResizeToFill(32, 32)], format='PNG', options={'quality': 60})
    logo16 = ImageSpecField(
        source='logo', processors=[ResizeToFill(16, 16)], format='PNG', options={'quality': 60})


    # Start mode
    start_mode = models.CharField(max_length=7,
                                  choices=StartMode.choices,
                                  default=StartMode.ON_PAGE_LOAD,
                                  verbose_name=_('SDK start mode'))
    start_mode_value = models.IntegerField(default=0)
    start_mode_urls = models.TextField(default="*", verbose_name=_('Urls where web push work'),
                                       help_text='* means all urls, '
                                                 'url staring with - means exclude, '
                                                 'url starting with + means include')

    # Auth Keys
    vapid_key_pair = JSONField(default=generate_vapid_keypair)
    # Todo Add identifier boolean to differentiate between vapid/fcm websites
    fcm_key = models.CharField(max_length=300, blank=True, null=True,
                               verbose_name=_('FCM key for old projects'))
    fcm_project_id = models.CharField(max_length=200, blank=True, null=True,
                                      verbose_name=_('FCM project id for old projects'))
    rest_api_key = models.CharField(max_length=70, default=generate_website_rest_api_key)
    sdk_auth_key = models.CharField(max_length=70, default=generate_website_sdk_auth_key)
    rest_api_key_enabled = models.BooleanField(default=False)
    post_subscription_html = models.TextField(null=True, blank=True)
    post_subscription_html_enabled = models.BooleanField(default=False)

    # Settings
    page_tracking = models.BooleanField(default=False)
    branding = models.BooleanField(default=True)
    service_worker_verified = models.BooleanField(default=False)
    service_worker_path = models.CharField(max_length=200, default='/sw-cw.js')

    # Integration Details
    manifest_json = models.FileField(null=True, blank=True)
    service_worker_js = models.FileField(null=True, blank=True)
    sdk_js = models.FileField(null=True, blank=True)

    # Logging
    server_logging = models.BooleanField(default=False)
    console_logging = models.BooleanField(default=False)

    def __str__(self):
        return '%s - %s' % (self.url, self.user,)


class MobilePrompt(BasePrompt):
    position = models.CharField(max_length=10,
                                choices=MobilePromptPosition.choices,
                                default=MobilePromptPosition.DIALOG_BOX)


class DesktopPrompt(BasePrompt):
    position = models.CharField(max_length=10,
                                choices=DesktopPromptPosition.choices,
                                default=DesktopPromptPosition.DIALOG_BOX)


class GDPRPrompt(BasePrompt):
    position = models.CharField(max_length=10,
                                choices=GDPRPromptPosition.choices,
                                default=GDPRPromptPosition.STICKY_HEADER)


def after_website_saved(sender, instance, created, **kwargs):
    if created:
        MobilePrompt.objects.create(website=instance)
        GDPRPrompt.objects.create(website=instance)
        DesktopPrompt.objects.create(website=instance)
        # set_all_integration_files(instance)


def after_user_created(sender, instance, created, **kwargs):
    if created:
            EmailSetting.objects.create(user=instance)


post_save.connect(after_user_created, User, dispatch_uid='after_user_created')
post_save.connect(after_website_saved, Website, dispatch_uid='after_website_saved')
