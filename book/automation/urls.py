from django.urls import path
from automation.views import WelcomeViewSet, BackInStockViewSet,\
    PriceDropViewSet, ShippingViewSet, AbandonedCartViewSet

urlpatterns = [
    path('welcome/', WelcomeViewSet.as_view({'get': 'retrieve', 'patch': 'partial_update'})),
    path('backinstock/', BackInStockViewSet.as_view({'get': 'retrieve', 'patch': 'partial_update'})),
    path('pricedrop/', PriceDropViewSet.as_view({'get': 'retrieve', 'patch': 'partial_update'})),
    path('shipping/', ShippingViewSet.as_view({'get': 'retrieve', 'patch': 'partial_update'})),
    path('abandonedcart/', AbandonedCartViewSet.as_view({'get': 'retrieve', 'patch': 'partial_update'})),
]
