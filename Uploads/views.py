from rest_framework import viewsets
from rest_framework import serializers
from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated

from Accounts.permissions import HasWebsite

from Uploads.models import UploadedImage

# Create your views here.


class UploadedImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedImage
        exclude = ('user',)


class UploadedImageViewSet(viewsets.GenericViewSet,
                           mixins.CreateModelMixin,
                           mixins.ListModelMixin,
                           mixins.RetrieveModelMixin,
                           mixins.DestroyModelMixin,
                           mixins.UpdateModelMixin):
    permission_classes = [IsAuthenticated, HasWebsite,]
    queryset = UploadedImage.objects.all()
    serializer_class = UploadedImageSerializer

    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user,
        )
