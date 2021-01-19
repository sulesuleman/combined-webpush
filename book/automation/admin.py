from django.contrib import admin
from automation.models import Welcome, BackInStock, AbandonedCart, PriceDrop, Shipping

@admin.register(Welcome)
class WelcomeAdmin(admin.ModelAdmin):
    exclude = ['extra_reminders']


@admin.register(BackInStock)
class BackInStockAdmin(admin.ModelAdmin):
    exclude = ['extra_reminders']


@admin.register(AbandonedCart)
class AbandonedCartAdmin(admin.ModelAdmin):
    exclude = ['extra_reminders']


@admin.register(PriceDrop)
class PriceDropAdmin(admin.ModelAdmin):
    exclude = ['extra_reminders']


@admin.register(Shipping)
class ShippingAdmin(admin.ModelAdmin):
    exclude = ['extra_reminders']


# Register your models here.
