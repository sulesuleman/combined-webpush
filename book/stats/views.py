from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from accounts.permissions import HasWebsite, HasWebsiteFullAccess
from stats.helpers import *

@api_view(['GET'])
@permission_classes([IsAuthenticated, HasWebsite, HasWebsiteFullAccess])
def revenue_stats_viewset(request):
    return Response(get_revenue_stats())
    

@api_view(['GET'])
@permission_classes([IsAuthenticated, HasWebsite, HasWebsiteFullAccess])
def campaign_stats_viewset(request):
    return Response(get_campaigns_stats())


@api_view(['GET'])
@permission_classes([IsAuthenticated, HasWebsite, HasWebsiteFullAccess])
def top_location_viewset(request):
    return Response(get_top_location_stats())


@api_view(['GET'])
@permission_classes([IsAuthenticated, HasWebsite, HasWebsiteFullAccess])
def sales_graph_viewset(request):
    return Response(sales_graph())


@api_view(['GET'])
@permission_classes([IsAuthenticated, HasWebsite, HasWebsiteFullAccess])
def active_subscribers_viewset(request):
    return Response(get_active_subscriber_stats())


@api_view(['GET'])
@permission_classes([IsAuthenticated, HasWebsite, HasWebsiteFullAccess])
def impressions_stats_viewset(request):
    return Response(get_impression_stats())

