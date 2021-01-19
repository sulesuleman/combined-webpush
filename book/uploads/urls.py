from rest_framework import routers

from uploads.views import UploadedImageViewSet


router = routers.DefaultRouter()
router.register('image', UploadedImageViewSet)

urlpatterns = router.urls
