from django.urls import path, include

from subscribes.views import SubscriberCreateViewSet,\
    SubscriberUpdateViewSet, SubscriberListUpdateViewSet, \
    SubscriberBulkUpdateView, SubscriberBulkDeleteView

from rest_framework.routers import DefaultRouter

from subscribes.views import SegmentViewSet, AudienceReachViewSet
# 
# router = DefaultRouter()
# 
# router.register(r'segment', SegmentViewSet, basename='segment-router')
# router.register(r'audience-reach', AudienceReachViewSet, basename='audience-reach-router')
# 
# urlpatterns = router.urls


urlpatterns = [
    path('segment/', SegmentViewSet.as_view({'post': 'create', 'get': 'list', 'delete': 'destroy'})),
    path('audience-reach/', AudienceReachViewSet.as_view({'patch': 'partial_update'})),
    path('list/update/', SubscriberListUpdateViewSet.as_view(
        {'get': 'list', 'patch': 'partial_update', 'delete': 'destroy'})),
    path('sdk/create/', SubscriberCreateViewSet.as_view({'post': 'create'})),
    path('sdk/update/<int:pk>/', SubscriberUpdateViewSet.as_view({'patch': 'partial_update'})),
    path('bulk/update/', SubscriberBulkUpdateView.as_view()),
    path('bulk/delete/', SubscriberBulkDeleteView.as_view())
]
