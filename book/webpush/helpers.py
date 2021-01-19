from subscribes.models import Segment, Subscriber

def get_campaign_default_utm_params():
    return {"source": "chirpyweb"}


def get_campaign_default_ctas():
    return [{"action": "OK", "title": "OK"}]


def get_default_expiry_time():
    return 259200  # seconds


def get_default_vapid_claims():
    return {"sub": "mailto:mailer@chirpyweb.com",}


def generate_campaign_payload(campaign, service_action='do_nothing'):
    # make service_action='force_update' for updating service worker
    actions = get_campaign_default_ctas()
    actions_links = {
        'OK': campaign.landing_url
    }
    if hasattr(campaign, 'actions'):
        actions = campaign.actions
        for action in actions:
            actions_links[action['action']] = action['link']
    return {
        'service_action': service_action,
        'actions': actions,
        'actions_links': actions_links,
        'push_id': campaign.id,
        'link': campaign.landing_url,
        'account_id': campaign.account.id,
        'type': 'campaign',
        # subscriber_id will be added later when sending
        'title': campaign.title,
        'message': campaign.message,
        'icon': campaign.icon.url
    }


def get_campaign_subscriber_ids(campaign):
    """
    1. If a campaign has websites selected then it would filter subscribers based on websites.
    2. If a campaign has segments selected then it would filter subscribers based on segments.
    3. If a campaign has websites and segments selected, then preferences would be given to
        websites and after that, segments filter will be applied
    :param campaign:
    :return:
    """
    subs_qs = Subscriber.objects.filter(account=campaign.account)
    websites = campaign.websites.all()
    # Todo We will take care of segments later.
    segments = campaign.segments.all()
    subs_qs = subs_qs.filter(webiste__in=websites)
    return subs_qs.values_list('id', flat=True)

