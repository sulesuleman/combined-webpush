from django.contrib import admin
from django.urls import path, include
from rest_auth import views as auth_views

from Accounts.views import ResendEmailVerification

urlpatterns = [
    path('admin/', admin.site.urls),\
    path('rest-auth/', include('rest_auth.urls')),\
    path('rest-auth/registration/', include('rest_auth.registration.urls')),\
    path('rest-auth-accounts/', include('allauth.urls')),\
    path('rest-auth/resend-verification-email/', ResendEmailVerification.as_view(),\
         name="resend-verification-email"),\
    path('reset_password/', auth_views.PasswordResetView.as_view(),\
         name='password_reset'), \
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(),\
         name='password_reset_confirm'),\
    path('accounts/', include('Accounts.urls')),\
    path('campaigns/', include('Campaigns.urls')),\
    path('subscribe/', include('Subscribes.urls')),\
    path('upload/', include('Uploads.urls')),\
    path('frontend/', include('frontend.urls')),
    path('shopify/', include('shopify_app.urls')),\
    path('', include('home.urls')),\

]
