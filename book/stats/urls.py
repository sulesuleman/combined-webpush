from django.urls import path
from stats.views import *


urlpatterns = [
    path('revenues/', revenue_stats_viewset),
    path('impressions/', impressions_stats_viewset),
    path('campaign_stats/', campaign_stats_viewset),
    path('topLocations/', top_location_viewset),
    path('salesGraph/', sales_graph_viewset),
    path('activeSubscribers/', active_subscribers_viewset)
]
