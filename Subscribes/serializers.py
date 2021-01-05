import time
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from django.utils.translation import ugettext_lazy as _

from Subscribes.models import Subscriber, Segment

from Subscribes.choices import OUTER_OPERATOR_CHOICES,\
    INNER_OPERATOR_CHOICES, NAME_CHOICES


class FilterSerializer(serializers.Serializer):
    outer_operator = serializers.ChoiceField(
        choices=OUTER_OPERATOR_CHOICES
    )
    inner_operator = serializers.ChoiceField(
        choices=INNER_OPERATOR_CHOICES
    )
    name = serializers.ChoiceField(
        choices=NAME_CHOICES
    )
    value = serializers.CharField(max_length=200)

    def __validate_at_least_data(self, attrs):
        #ToDo Need to add
        pass

    def validate(self, attrs):
        validated_data = super(FilterSerializer, self).validate(attrs)
        self.__validate_at_least_data(attrs)
        return validated_data


class SegmentGroupSerializer(serializers.Serializer):
    filters = serializers.ListSerializer(
        child=FilterSerializer(),
        required=True,
        allow_empty=False
    )
    outer_operator = serializers.ChoiceField(
        required=True, choices=OUTER_OPERATOR_CHOICES)


class SegmentSerializer(serializers.ModelSerializer):
    website = serializers.SerializerMethodField(read_only=True)
    groups = serializers.ListSerializer(
        child=SegmentGroupSerializer(),
        required=True,
        allow_empty=False
    )

    def get_website(self, obj):
        return {'website_key': obj.website.website_key}

    class Meta:
        model = Segment
        fields = "__all__"
        extra_kwargs = {
            'segment_key': {'read_only': True},
        }


class SubscriberCreateSerializer(serializers.ModelSerializer):
    def validate(self, attrs):
        token = attrs.get('token', None)
        sub_info = attrs.get('subscription_info', None)
        if token is None and sub_info is None:
            raise ValidationError(_("Either token or subscription_info is required"))
        return attrs

    class Meta:
        model = Subscriber
        fields = ('id', 'active', 'token', 'subscription_info',)
        write_only_fields = ('token', 'subscription_info',)

    def create(self, validated_data):
        validated_data['active'] = True
        subscription_info = validated_data.get('subscription_info', None)
        token = validated_data.get('token', None)
        # ToDo Handle case for Safari
        if subscription_info is not None:
            endpoint, subscription_id = subscription_info.get('endpoint').rsplit('/', 1)
            existing_obj = Subscriber.objects.filter(subscription_id=subscription_id).first()
            if existing_obj:
                existing_obj.active = True
                existing_obj.save()
                return existing_obj
            validated_data['endpoint'] = endpoint
            validated_data['subscription_id'] = subscription_id
            return super(SubscriberCreateSerializer, self).create(validated_data)


class SubscriberUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = ('id', 'active', 'self_unsubscribed',)


class SubscriberListUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        exclude = ('subscription_info', 'subscription_id', 'endpoint', 'token', )
        write_only_fields = ('is_test_device',)


class BulkSubscriberUpdateSerializerWrapper(serializers.Serializer):
    ids = serializers.ListField(
        child=serializers.PrimaryKeyRelatedField(
            queryset=Subscriber.objects.all()
        )
    )
    is_test_device = serializers.BooleanField()

    def validate(self, attrs):
        self.fields.get('ids').child.queryset = \
            self.context['request'].user.website.subscriber_set.all()
        return super(BulkSubscriberUpdateSerializerWrapper, self).validate(attrs)


class BulkSubscriberDeleteSerializerWrapper(serializers.Serializer):
    ids = serializers.ListField(
        child=serializers.PrimaryKeyRelatedField(
            queryset=Subscriber.objects.all()
        )
    )

    def validate(self, attrs):
        self.fields.get('ids').child.queryset = \
            self.context['request'].user.website.subscriber_set.all()
        return super(BulkSubscriberDeleteSerializerWrapper, self).validate(attrs)


