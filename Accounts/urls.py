from rest_framework import routers
from django.urls import path, include

from Accounts.views import WebsiteViewSet, DesktopPromptViewSet,\
    MobilePromptViewSet, GDPRPromptViewSet, EmailSettingViewSet


email_setting_list = EmailSettingViewSet.\
    as_view({'get': 'retrieve', 'patch': 'partial_update'})

router = routers.DefaultRouter()
router.register(r'website', WebsiteViewSet, basename='website-endpoint')
router.register(r'prompt/desktop', DesktopPromptViewSet, basename='prompt-desktop-endpoint')
router.register(r'prompt/mobile', MobilePromptViewSet, basename='prompt-mobile-endpoint')
router.register(r'prompt/gdpr', GDPRPromptViewSet, basename='prompt-gdpr-endpoint')

urlpatterns = router.urls

urlpatterns += [
    path('email-setting/', email_setting_list)
]
