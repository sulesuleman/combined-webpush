from django.db import models
from model_utils.models import TimeStampedModel
from accounts.abstract import WebsiteOneToOne
from webpush.abstract import BaseNotification
from accounts.abstract import StatsStampedModel


from app.fields import JSONSchemaField


class Welcome(TimeStampedModel, WebsiteOneToOne, BaseNotification, StatsStampedModel):
    title = models.CharField(max_length=200, default='Welcome Notification')
    message = models.CharField(max_length=300,
                               default='A Notification is sent to the subscriber as soon as they subscribe to your store notification')
    enabled = models.BooleanField(default=True)
    extra_reminders = JSONSchemaField(schemas='schemas/welcome_playbook_reminders', default=list)


class BackInStock(TimeStampedModel, WebsiteOneToOne, BaseNotification, StatsStampedModel):
    title = models.CharField(max_length=200, default='BackInStock Notification')
    message = models.CharField(max_length=300,
                               default='Black Friday 30% OFF on all Products')
    enabled = models.BooleanField(default=True)
    extra_reminders = JSONSchemaField(schemas='schemas/backinstock_reminders', default=list)


class AbandonedCart(TimeStampedModel, WebsiteOneToOne, BaseNotification, StatsStampedModel):
    title = models.CharField(max_length=200, default='Abandoned Cart Notification')
    message = models.CharField(max_length=300,
                               default='Claim revenue from shoppers, who left their items in cart')
    enabled = models.BooleanField(default=True)
    extra_reminders = JSONSchemaField(schemas='schemas/abandonedcart_reminders', default=list)


class PriceDrop(TimeStampedModel, WebsiteOneToOne, BaseNotification, StatsStampedModel):
    title = models.CharField(max_length=200, default='PriceDrop Notification')
    message = models.CharField(max_length=300,
                               default='Get notifications, as soon as there is slight change in product price')
    enabled = models.BooleanField(default=True)
    extra_reminders = JSONSchemaField(schemas='schemas/pricedrop_reminders', default=list)


class Shipping(TimeStampedModel, WebsiteOneToOne, BaseNotification, StatsStampedModel):
    title = models.CharField(max_length=200, default='Shipping Notification')
    message = models.CharField(max_length=300,
                               default='Get notified for the shipments you will be delivering')
    enabled = models.BooleanField(default=True)
    extra_reminders = JSONSchemaField(schemas='schemas/shipping_reminders', default=list)

