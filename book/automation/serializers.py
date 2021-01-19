from rest_framework import serializers
from automation.models import Welcome, AbandonedCart, \
    BackInStock, Shipping, PriceDrop


class WelcomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Welcome
        exclude = ('website', 'utm_params', 'ctas', 'mobile_homepage', 'desktop_homepage')


class BackInStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = BackInStock
        exclude = ('website', 'utm_params', 'ctas', 'mobile_homepage', 'desktop_homepage')


class AbandonedCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbandonedCart
        exclude = ('website', 'utm_params', 'ctas', 'mobile_homepage', 'desktop_homepage')


class PriceDropSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceDrop
        exclude = ('website', 'utm_params', 'ctas', 'mobile_homepage', 'desktop_homepage')


class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        exclude = ('website', 'utm_params', 'ctas', 'mobile_homepage', 'desktop_homepage')
