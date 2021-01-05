import pytz
import datetime
from datetime import datetime
from django.conf import settings
from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _
from rest_framework.exceptions import ValidationError

from Campaigns.models import Campaign, CampaignStatus
from Subscribes.models import Segment


class CampaignSerializer(serializers.ModelSerializer):
    ctr = serializers.FloatField(read_only=True)
    segments = serializers.ManyRelatedField(
        child_relation=serializers.PrimaryKeyRelatedField(
            queryset=Segment.objects.all()
        ), allow_empty=True, required=False, write_only=True)

    def __totimestamp_posix(self, dt, epoch=datetime(1970, 1, 1)):
        utc_naive = dt.replace(tzinfo=None) - dt.utcoffset()
        return (utc_naive - epoch).total_seconds()

    def __update_website_and_segments_relations(self, requesting_user):
        # ToDo Incase of acess management, we need to change this
        self.fields.get('segments').child_relation = requesting_user.website.segment_set.all()

    def validate_scheduled_at_and_timezone(self, scheduled_at):
        if not scheduled_at:
            raise ValidationError(_("Scheduled time is required!"))
        # local = pytz.timezone(scheduled_at_timezone)
        # naive = scheduled_at
        # naive = naive.replace(tzinfo=None)
        # local_dt = local.localize(naive, is_dst=None)
        # scheduled_at = local_dt.astimezone(pytz.timezone(settings.TIME_ZONE))
        time_right_now = pytz.timezone(settings.TIME_ZONE).localize(datetime.now())
        if self.__totimestamp_posix(scheduled_at) <= self.__totimestamp_posix(time_right_now):
            raise ValidationError(_("Scheduled time can't be in the past!"))

    def validate(self, attrs):
        self.__update_website_and_segments_relations(self.context['request'].user)
        attrs = super(CampaignSerializer, self).validate(attrs)
        if not attrs.get('immediately', True):
            self.validate_scheduled_at_and_timezone(
                attrs.get('scheduled_at', None))
        return attrs

    def create(self, validated_data):
        if validated_data.get('scheduled_at') is not None:
            validated_data['status'] = CampaignStatus.SCHEDULED
        return super(CampaignSerializer, self).create(validated_data)

    class Meta:
        model = Campaign
        exclude = ('auth',)
        extra_kwargs = {
            'ctr': {'read_only': True},
            'status': {'read_only': True},
            'sender': {'read_only': True},
            'total_subs': {'read_only': True},
            'sent_subs': {'read_only': True},
            'clicks': {'read_only': True},
            'revenue': {'read_only':True},
            'impressions': {'read_only': True},
            'closed': {'read_only': True},
            'website': {'read_only': True},
        }
