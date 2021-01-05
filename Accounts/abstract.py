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
    website = models.ForeignKey('Accounts.Website', on_delete=models.CASCADE)

    class Meta:
        abstract = True


class WebsiteOneToOne(models.Model):
    website = models.OneToOneField('Accounts.Website', on_delete=models.CASCADE)

    class Meta:
        abstract = True


class UserOneToOne(models.Model):
    user = models.OneToOneField('Accounts.User', on_delete=models.CASCADE)

    class Meta:
        abstract = True


class UserForeignkey(models.Model):
    user = models.ForeignKey('Accounts.User', on_delete=models.CASCADE)

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

    class Meta:
        abstract = True

    @property
    def serialized(self):
        results = serializers.serialize(
            'json', [self],
            ensure_ascii=False,
            fields=('enabled', 'title', 'message', 'allow_btn_text', 'deny_btn_text',))
        return json.loads(results[1:-1])['fields']