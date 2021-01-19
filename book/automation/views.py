from rest_framework import viewsets
from rest_framework import mixins
from rest_framework import permissions

from automation.serializers import WelcomeSerializer, BackInStockSerializer, \
    PriceDropSerializer, AbandonedCartSerializer, ShippingSerializer

from accounts.permissions import HasWebsite
# Create your views here.

from .models import Welcome, BackInStock, Shipping, PriceDrop, AbandonedCart


class WelcomeViewSet(viewsets.GenericViewSet,
                     mixins.CreateModelMixin,
                     mixins.UpdateModelMixin,
                     mixins.RetrieveModelMixin):
    permission_classes = (permissions.IsAuthenticated, HasWebsite)
    serializer_class = WelcomeSerializer

    def get_object(self):
        return self.request.user.website.welcome \
            if hasattr(self.request.user.website, 'welcome') \
            else Welcome.objects.create(
                    website=self.request.user.website,
                    title='Welcome to %s' % self.request.user.website.title,
                    message='We will keep you in loop!'
                )


class BackInStockViewSet(viewsets.GenericViewSet,
                         mixins.CreateModelMixin,
                         mixins.UpdateModelMixin,
                         mixins.RetrieveModelMixin):
    permission_classes = (permissions.IsAuthenticated, HasWebsite)
    serializer_class = BackInStockSerializer

    def get_object(self):
        return self.request.user.website.backinstock\
            if hasattr(self.request.user.website, 'backinstock')\
            else BackInStock.objects.create(
                    website=self.request.user.website,
                    title='Welcome to %s' % self.request.user.website.title,
                    message='We will keep you in loop!'
                )


class PriceDropViewSet(viewsets.GenericViewSet,
                       mixins.CreateModelMixin,
                       mixins.UpdateModelMixin,
                       mixins.RetrieveModelMixin):
    permission_classes = (permissions.IsAuthenticated, HasWebsite)
    serializer_class = PriceDropSerializer

    def get_object(self):
        return self.request.user.website.backinstock \
            if hasattr(self.request.user.website, 'pricedrop') \
            else PriceDrop.objects.create(
            website=self.request.user.website,
            title='Welcome to %s' % self.request.user.website.title,
            message='We will keep you in loop!'
        )


class AbandonedCartViewSet(viewsets.GenericViewSet,
                           mixins.CreateModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.RetrieveModelMixin):
    permission_classes = (permissions.IsAuthenticated, HasWebsite)
    serializer_class = AbandonedCartSerializer

    def get_object(self):
        return self.request.user.website.backinstock \
            if hasattr(self.request.user.website, 'abandonedcart') \
            else AbandonedCart.objects.create(
            website=self.request.user.website,
            title='Welcome to %s' % self.request.user.website.title,
            message='We will keep you in loop!'
        )


class ShippingViewSet(viewsets.GenericViewSet,
                      mixins.CreateModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.RetrieveModelMixin):
    permission_classes = (permissions.IsAuthenticated, HasWebsite)
    serializer_class = ShippingSerializer

    def get_object(self):
        return self.request.user.website.backinstock \
            if hasattr(self.request.user.website, 'shipping') \
            else Shipping.objects.create(
            website=self.request.user.website,
            title='Welcome to %s' % self.request.user.website.title,
            message='We will keep you in loop!'
        )