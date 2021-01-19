from automation.models import WelcomePlaybook


def create_welcome_playbook(website):
    playbook = WelcomePlaybook.objects.create(
        website=website,
        title='Welcome to {website_title}'.format(website_title=website.title),
        message='We will keep you posted with latest updates',
        landing_url='{website_url}'.format(website_url=website.url),
        icon=website.logo16_2x.path,
        welcome_push_enabled=True,
        extra_reminders=[]
    )
    return playbook


def get_welcome_inqueue_notifications():
    return{
        'welcome_notify_queues': 2
    }


def get_back_in_stock_inqueue_notifications():
    return {
        'back_in_stock_queues': 3
    }


def get_recover_abandoned_carts_queues():
    return {
        'recover_abandoned_queues': 3
    }
