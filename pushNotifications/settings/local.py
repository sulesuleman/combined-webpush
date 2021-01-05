from .base import *


ROOT_URLCONF = 'pushNotifications.urls.local'
REST_FRAMEWORK['DEFAULT_AUTHENTICATION_CLASSES'] += ['rest_framework.authentication.TokenAuthentication']
