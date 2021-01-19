from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth import get_user_model
from django.utils.translation import ugettext_lazy as _

from .helpers import set_campaign_default_icon

from accounts.abstract import TimeStampedFields, StatsStampedModel
from webpush.abstract import BaseNotification

from accounts.abstract import WebsiteForeignkey
USER_MODEL = get_user_model()


class CampaignStatus(models.TextChoices):
    WAITING = 'Waiting', _('Waiting')
    PROCESSING = 'Processing', _('Processing')
    COMPLETED = 'Completed', _('Completed')
    SCHEDULED = 'Scheduled', _('Scheduled')
    DISCARDED = 'Discarded', _('Discarded')


class CampaignCategory(models.TextChoices):
    REGULAR = 'Regular', _('Regular')
    FLASH_SALE = 'Flash_Sale', _('Flash_Sale')


class Campaign(WebsiteForeignkey, TimeStampedFields,
               BaseNotification, StatsStampedModel):
    name = models.CharField(max_length=100)

    status = models.CharField(max_length=15, choices=CampaignStatus.choices,
                              default=CampaignStatus.WAITING)
    campaign_category = models.CharField(max_length=15, choices=CampaignCategory.choices,
                                default=CampaignCategory.REGULAR)

    segments = models.ManyToManyField('subscribes.Segment', blank=True)

    sender = models.ForeignKey(USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
    auth = models.TextField(null=True, blank=True)

    immediately = models.BooleanField(default=True)
    scheduled_at = models.DateTimeField(null=True, blank=True)

    total_subs = models.IntegerField(default=0)
    sent_subs = models.IntegerField(default=0)

    def __str__(self):
        return '%s - %s' % (self.website.website_key, self.name,)

    @property
    def ctr(self):
        try:
            return round(self.clicks / self.sent_subs, 3)
        except ZeroDivisionError as e:
            return 0


def after_campaign_created(sender, instance, created, **kwargs):
    if created:
        # TOdO 1. Need to add campaign to queue if its immediately
        #   2. If scheduling its in today date, Schdeule it
        if instance.icon is None:
            set_campaign_default_icon(instance)


post_save.connect(after_campaign_created, Campaign, dispatch_uid='after_campaign_created')

