from django.db import models
from model_utils.models import TimeStampedModel
from Accounts.abstract import WebsiteOneToOne, BasePrompt
from webpush.abstract import BaseNotification


from pushNotifications.fields import JSONSchemaField


class WelcomePlaybook(TimeStampedModel, WebsiteOneToOne, BaseNotification):
    enabled = models.BooleanField(default=True)
    welcome_push_enabled = models.BooleanField(default=True)
    extra_reminders = JSONSchemaField(schemas='schemas/welcome_playbook_reminders.json', default=list)
