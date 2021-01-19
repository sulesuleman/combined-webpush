from django.contrib import admin

from campaigns.models import Campaign

# Register your models here.


@admin.register(Campaign)
class CampaignAdmin(admin.ModelAdmin):
    ...
