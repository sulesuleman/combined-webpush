from django.db import models
from app.fields import JSONSchemaField

from accounts.abstract import WebsiteForeignkey, TimeStampedFields

from .utils import generate_segment_key


class Segment(WebsiteForeignkey,TimeStampedFields):
    name = models.CharField(max_length=100)
    segment_key = models.CharField(default=generate_segment_key, max_length=25)

    groups = JSONSchemaField(schemas="schemas/filters.json", default=[])
    audience_reach = models.IntegerField(default=-1)

    def __str__(self):
        return '%s - %s' % (self.name, self.segment_key,)

    def refresh_audience_reach(self):
        # ToDo Need to build this feature
        self.audience_reach = 0
        self.save()


class Subscriber(WebsiteForeignkey, TimeStampedFields):
    name = models.CharField(max_length=100, default="Anonymous")

    active = models.BooleanField(default=True)
    self_unsubscribed = models.BooleanField(default=False)
    is_test_device = models.BooleanField(default=False)
    ip_address = models.CharField(max_length=200, null=True, blank=True)
    ip_data = models.JSONField(default={})

    browser = models.CharField(null=True, blank=True, max_length=50)
    browser_version = models.CharField(max_length=20, null=True, blank=True)
    platform = models.CharField(null=True, blank=True, max_length=50)
    operating_system = models.CharField(null=True, blank=True, max_length=50)
    operating_system_version = models.CharField(max_length=50, null=True, blank=True)

    # Safari Fields
    token = models.CharField(max_length=500, null=True, blank=True, unique=True)

    # Non-Safari (VAPID/FCM) fields
    endpoint = models.CharField(max_length=300, blank=True, null=True)
    subscription_id = models.CharField(max_length=500, null=True, blank=True, unique=True)
    subscription_info = models.JSONField(null=True, blank=True)

    def __str__(self):
        return '%d-%s' % (self.pk, self.browser)

# ToDo Subscriber logs from browser Model
