from rest_framework import viewsets
from rest_framework import mixins
from django_filters import rest_framework as filters
from rest_framework import filters as rest_filters
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from Accounts.permissions import HasWebsite, HasWebsiteFullAccess

from Campaigns.serializers import CampaignSerializer, Campaign


class CampaignViewSet(viewsets.GenericViewSet,
                      mixins.CreateModelMixin,
                      mixins.ListModelMixin):
    serializer_class = CampaignSerializer
    permission_classes = [IsAuthenticated, HasWebsite, HasWebsiteFullAccess]
    pagination_class = PageNumberPagination
    filter_backends = (filters.DjangoFilterBackend, rest_filters.SearchFilter, )
    filterset_fields = {
        'status': ['exact'],
        'name': ['exact'],
        'title': ['exact']
    }
    search_fields = ['name', 'title', 'message']
    queryset = Campaign.objects.all()

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user,
                        website=self.request.user.website)


class ExportCampaignViewSet(viewsets.GenericViewSet,
                            mixins.ListModelMixin):
    permission_classes = [IsAuthenticated, HasWebsite, HasWebsiteFullAccess]
    filter_backends = (filters.DjangoFilterBackend, rest_filters.SearchFilter, )
    filterset_fields = ('status', 'name', 'title',)
    search_fields = ['name', 'title', 'message']
    queryset = Campaign.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        #ToDo Add email fields
        return Response({'detail': 'Email will be sent shortly with all details'},
                        status=status.HTTP_200_OK)
