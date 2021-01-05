from rest_framework import routers

from Uploads.views import UploadedImageViewSet


router = routers.DefaultRouter()
router.register('image', UploadedImageViewSet)

urlpatterns = router.urls
