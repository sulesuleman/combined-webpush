from django.db import models
from django.utils.translation import ugettext_lazy as _


class StartMode(models.TextChoices):
    ON_PAGE_LOAD = 'OPL', _('On Page Load')
    TIME_DELAY = 'TD', _('After Time Delay')
    NUM_OF_VISITS = 'NOV', _('After number of visits')
    MANUAL_JS_CALL = 'MJSC', _('Manually by calling a JavaScript function')
    SPECIFIC_URLS = 'SURLS', _('On Specific Urls')


class MobilePromptPosition(models.TextChoices):
    BELL = 'B', _('Bell')
    STICKY_BAR = 'SB', _('Sticky Bar')
    DIALOG_BOX = 'DO', _('DIALOG_BOX')
    FULL_SCREEN = 'FS', _('Full Screen')
    SIDE_UP_BOX = 'SUB', _('Side-up Box')
    STICKY_HEADER = 'SH', _('Sticky Header')
    CENTRAL_MODAL = 'CM', _('Central Modal')
    NATIVE_OPT_IN = 'NOI', _('Native Opt In')


class DesktopPromptPosition(models.TextChoices):
    BELL = 'B', _('Bell')
    STICKY_BAR = 'SB', _('Sticky Bar')
    DIALOG_BOX = 'DO', _('DIALOG_BOX')
    FULL_SCREEN = 'FS', _('Full Screen')
    SIDE_UP_BOX = 'SUB', _('Side-up Box')
    STICKY_HEADER = 'SH', _('Sticky Header')
    CENTRAL_MODAL = 'CM', _('Central Modal')
    NATIVE_OPT_IN = 'NOI', _('Native Opt In')
    RIGHT_SIDEBAR = 'RS', _('Right Sidebar')


class GDPRPromptPosition(models.TextChoices):
    STICKY_HEADER = 'SH', _('Sticky Header')
    STICKY_FOOTER = 'SF', _('Sticky Footer')


class ReportsInterval(models.TextChoices):
    WEEKLY = 'WE', _('Weekly')
    DAILY = 'DA', _('Daily')
    MONTHLY = 'MO', _('MONTHLY')
    NEVER = 'NE', _('NEVER')
