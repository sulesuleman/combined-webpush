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
