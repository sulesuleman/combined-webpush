
#CAMPAIGNS#

def set_campaign_default_icon(campaign):
    website = campaign.websites.first()
    if website is None:
        website = campaign.account.user.website_set.first()
    campaign.icon = website.logo
    campaign.save()

