import json
from django.db import models
from django.core import serializers
from django.utils.translation import ugettext_lazy as _


class TimeStampedFields(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class WebsiteForeignkey(models.Model):
    website = models.ForeignKey('accounts.Website', on_delete=models.CASCADE)

    class Meta:
        abstract = True


class WebsiteOneToOne(models.Model):
    website = models.OneToOneField('accounts.Website', on_delete=models.CASCADE)

    class Meta:
        abstract = True


class UserOneToOne(models.Model):
    user = models.OneToOneField('accounts.User', on_delete=models.CASCADE)

    class Meta:
        abstract = True


class UserForeignkey(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)

    class Meta:
        abstract = True


class BasePrompt(WebsiteOneToOne):
    enabled = models.BooleanField(default=True)
    title = models.CharField(_('Prompt Title'), max_length=100,
                             default="We'd like to notify you about the latest updates.")
    message = models.CharField(_('Prompt Message'), max_length=300,
                               default="You can unsubscribe from notifications anytime.")
    allow_btn_text = models.CharField(_('allow button text'), max_length=15, default="Allow")
    deny_btn_text = models.CharField(_('deny button text'), max_length=15, default="Deny")
    icon = models.ForeignKey("uploads.UploadedImage", null=True, on_delete=models.DO_NOTHING)
    allow_button_background_color = models.CharField(max_length=50, default="green")
    allow_button_text_color = models.CharField(max_length=50, default="white")
    deny_button_background_color = models.CharField(max_length=50, default="red")
    deny_button_text_color = models.CharField(max_length=50, default="white")
    show_after_seconds = models.PositiveIntegerField(default=5)
    overlay_text = models.CharField(max_length=200, default="Click on 'Allow' to subscribe to the latest updates.")

    class Meta:
        abstract = True

    @property
    def serialized(self):
        results = serializers.serialize(
            'json', [self],
            ensure_ascii=False,
            fields=('enabled', 'title', 'message', 'allow_btn_text', 'deny_btn_text',))
        return json.loads(results[1:-1])['fields']


class StatsStampedModel(models.Model):
    clicks = models.PositiveIntegerField(default=0)
    revenue = models.PositiveIntegerField(default=0)
    impressions = models.PositiveIntegerField(default=0)
    closed = models.IntegerField(default=0)

    class Meta:
        abstract = True
