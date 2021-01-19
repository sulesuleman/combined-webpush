from rest_framework import viewsets
from rest_framework import generics
from django_filters import rest_framework as filters
from ipware import get_client_ip
from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework import filters as rest_filters
from rest_framework import status

from subscribes.models import Subscriber, Segment

from vendor.ipstack import rest_client as ip_stack_client

from subscribes.utils import UserAgentExtended
from app.authentication import SDKTokenAuthentication

from accounts.permissions import IsSdkAuthWebsiteAssociated
from accounts.permissions import HasWebsiteFullAccess, HasWebsite

from subscribes.serializers import SegmentSerializer
from subscribes.serializers import SubscriberCreateSerializer, \
    SubscriberListUpdateSerializer, SubscriberUpdateSerializer, \
    BulkSubscriberUpdateSerializerWrapper, \
    BulkSubscriberDeleteSerializerWrapper


# Create your views here.


class SegmentViewSet(viewsets.GenericViewSet,
                     mixins.CreateModelMixin,
                     mixins.ListModelMixin,
                     mixins.DestroyModelMixin,
                     mixins.RetrieveModelMixin):

    serializer_class = SegmentSerializer
    permission_classes = [IsAuthenticated, HasWebsite, HasWebsiteFullAccess]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        return self.request.user.website.segment_set.all()

    def perform_create(self, serializer):
        serializer.save(website=self.request.user.website)


class AudienceReachViewSet(viewsets.GenericViewSet,
                           mixins.UpdateModelMixin):
    permission_classes = [IsAuthenticated, HasWebsite]
    serializer_class = SegmentSerializer
    queryset = Segment.objects.all()
    # def get_queryset(self):
    #     return self.request.user.website.segment.all()

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        instance.refresh_audience_reach()
        instance.refresh_from_db()
        serializer = self.get_serializer(instance)
        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}
        return Response(serializer.data)


class SubscriberCreateViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    permission_classes = [IsAuthenticated, IsSdkAuthWebsiteAssociated, HasWebsite]
    serializer_class = SubscriberCreateSerializer
    authentication_classes = [SDKTokenAuthentication]

    def perform_create(self, serializer):
        ip_address, is_routable = get_client_ip(self.request)
        ip_data = ip_stack_client.get_data(ip_address)
        user_agent = UserAgentExtended(self.request.user_agent)
        serializer.save(
            website=self.request.user,
            ip_address=ip_address,
            ip_data=ip_data,
            platform=user_agent.platform,
            browser=user_agent.browser,
            browser_version=user_agent.browser_version,
            operating_system=user_agent.operating_system,
            operating_system_version=user_agent.operating_system_version
        )


class SubscriberUpdateViewSet(viewsets.GenericViewSet, mixins.UpdateModelMixin):
    permission_classes = [IsAuthenticated, IsSdkAuthWebsiteAssociated, HasWebsite, \
                          HasWebsiteFullAccess]
    serializer_class = SubscriberUpdateSerializer
    authentication_classes = [SDKTokenAuthentication]
    lookup_field = 'pk'

    def get_queryset(self):
        return Subscriber.objects.all()


class SubscriberListUpdateViewSet(viewsets.GenericViewSet,
                                  mixins.ListModelMixin,
                                  mixins.UpdateModelMixin,
                                  mixins.DestroyModelMixin):
    permission_classes = [IsAuthenticated, HasWebsite, HasWebsiteFullAccess]
    serializer_class = SubscriberListUpdateSerializer
    pagination_class = PageNumberPagination
    filter_backends = (filters.DjangoFilterBackend, rest_filters.SearchFilter)
    filterset_fields = {
        'active': ['exact'],
        'is_test_device': ['exact'],
        'browser': ['exact'],
        'platform': ['exact'],
        'created_at': ['exact', 'gte', 'lte'],
        'operating_system': ['exact'],
        'ip_address': ['exact', ]
    }
    search_fields = ['browser', 'platform', 'operating_system',]

    def get_queryset(self):
        # ToDo Need to figure out for agents
        return self.request.user.website.subscriber.all()


class SubscriberBulkUpdateView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated, HasWebsite]
    serializer_class = BulkSubscriberUpdateSerializerWrapper

    def get_queryset(self):
        return self.request.user.website.subscriber.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        subs_to_be_updated = self.get_queryset().filter(id__in=serializer.data['ids'])
        for sub in subs_to_be_updated:
            sub.is_test_device = serializer.data['is_test_device']
        Subscriber.objects.bulk_update(subs_to_be_updated, ['is_test_device'], batch_size=100)
        headers = self.get_success_headers(serializer.data)
        return Response({'detail': 'updated'}, status=status.HTTP_201_CREATED, headers=headers)


class SubscriberBulkDeleteView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated, HasWebsite, ]
    serializer_class = BulkSubscriberDeleteSerializerWrapper

    def get_queryset(self):
        return self.request.user.website.subscriber.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        subs_to_be_deleted = self.get_queryset().filter(id__in=serializer.data['ids'])
        subs_to_be_deleted.delete()
        headers = self.get_success_headers(serializer.data)
        return Response({'detail': 'deleted'}, status=status.HTTP_204_NO_CONTENT, headers=headers)