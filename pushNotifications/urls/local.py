from django.conf.urls.static import static
from django.conf import settings

from .base import *


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
