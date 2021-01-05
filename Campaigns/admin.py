from django.contrib import admin

from Campaigns.models import Campaign

# Register your models here.


@admin.register(Campaign)
class CampaignAdmin(admin.ModelAdmin):
    ...
