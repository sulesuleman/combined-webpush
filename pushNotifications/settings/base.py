import os
import environ
from pathlib import Path

env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)
# reading ..env file
environ.Env.read_env()


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
PROJECT_DIR = os.path.join(os.path.dirname(__file__), "../..")

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG')

ALLOWED_HOSTS = env('ALLOWED_HOSTS').split(',')


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
]


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django_user_agents.middleware.UserAgentMiddleware',
    'shopify_app.middleware.LoginProtection',
]

ROOT_URLCONF = 'pushNotifications.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'shopify_app.context_processors.current_shop',
            ],
        },
    },
]

WSGI_APPLICATION = 'pushNotifications.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': env('POSTGRES_DB'),
        'USER': env('POSTGRES_USER'),
        'PASSWORD': env('POSTGRES_PASSWORD'),
        'HOST': env('POSTGRES_HOST'),
        'PORT': env('POSTGRES_PORT'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'

# CUSTOM SETTINGS #

INSTALLED_APPS +=[
    'webpack_loader',
    # cors #
    'corsheaders',
    # REST_FRAMEWORK #
    'rest_framework',
    'rest_framework.authtoken',
    'django.contrib.sites',
    'rest_auth',
    'allauth',
    'allauth.account',
    'rest_auth.registration',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.twitter',
    # ImageKit #
    'imagekit',
    # Import Export #
    'import_export',
    # Filters #
    'django_filters',
    #Custom User #
    'custom_user',
    # User-Agents #
    'django_user_agents',
    #Modules#
    'Accounts',
    'Campaigns',
    'Subscribes',
    'Uploads',
    'webpush',
    'vendor',
    'automation',
    'shopify_app.apps.ShopifyAppConfig',
    'home.apps.HomeConfig',
    'frontend'
]


SITE_ID = 1

AUTH_USER_MODEL = 'Accounts.User'
CORS_ORIGIN_ALLOW_ALL = True

REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER': 'Accounts.serializers.UserDetailsSerializer',
    'TOKEN_SERIALIZER': 'Accounts.serializers.TokenSerializer'
}
REST_AUTH_REGISTER_SERIALIZERS = {
    'REGISTER_SERIALIZER' : 'Accounts.serializers.CustomRegisterSerializer'
}
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_AUTHENTICATION_METHOD = 'email'
AUTHENTICATION_BACKENDS = [
    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
]
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

VENDORS = {
    'IP_STACK': {
        'API_ACCESS_KEY': 'eeee56cdf1cebc0441894eb5d261e371',
        'API_ENDPOINT': 'http://api.ipstack.com'
    }
}

# ImportExport Settings #
IMPORT_EXPORT_USE_TRANSACTIONS = False
IMPORT_EXPORT_SKIP_ADMIN_LOG = False 

# storage settings
STATIC_ROOT = 'static'
MEDIA_ROOT = 'media'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ]
}

WEBPACK_LOADER = {
  'DEFAULT': {
    'BUNDLE_DIR_NAME': 'frontend/',
    'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json')
  }
}