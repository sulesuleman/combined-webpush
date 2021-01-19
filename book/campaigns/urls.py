from django.urls import path, include
from campaigns.views import CampaignViewSet, ExportCampaignViewSet

urlpatterns = [
    path('', CampaignViewSet.as_view(
        {'get': 'list', 'post': 'create'})),
    path('export/', ExportCampaignViewSet.as_view(
        {'get': 'list'})),
]
