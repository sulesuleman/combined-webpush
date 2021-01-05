from django.db import models
from django.contrib.postgres.fields import JSONField

from webpush.helpers import get_campaign_default_utm_params, \
    get_campaign_default_ctas, get_default_expiry_time


class BaseNotification(models.Model):
    title = models.CharField(max_length=200)
    message = models.CharField(max_length=300)
    landing_url = models.URLField()
    banner_image = models.ImageField(null=True, blank=True)
    icon = models.ImageField(null=True, blank=True)
    expiry_time = models.IntegerField(default=get_default_expiry_time)
    sticky = models.BooleanField(default=True)
    utm_params = JSONField(default=get_campaign_default_utm_params)
    ctas = JSONField(default=get_campaign_default_ctas)
    mobile_homepage = models.BooleanField(default=False)
    desktop_homepage = models.BooleanField(default=False)

    class Meta:
        abstract = True
