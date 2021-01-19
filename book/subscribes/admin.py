from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from subscribes.models import Subscriber, Segment



@admin.register(Subscriber)
class SubscriberAdmin(ImportExportModelAdmin):
    search_fields = ('website.website_key',)
    list_filter = ('active', 'self_unsubscribed', 'is_test_device', 'browser', 'platform', 'operating_system',)


@admin.register(Segment)
class SegmentAdmin(admin.ModelAdmin):
    exclude = ['groups']

