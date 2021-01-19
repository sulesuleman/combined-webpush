from django.db import transaction

from .models import Segment


def create_account_segments(account):
    """
    Default segments
    :param account:
    :return:
    """
    with transaction.atomic():
        Segment.objects.create(
            name="Mobile Only Subscribers",

            groups=[{'filters': [
                {
                    'name': 'platform',
                    'value': 'mobile',
                    'inner_operator': 'is',
                    'outer_operator': 'and'
                }
            ], 'outer_operator': 'and'}]
        )
        Segment.objects.create(
            name="Desktop Only Subscribers",

            groups=[{'filters': [
                {
                    'name': 'platform',
                    'value': 'desktop',
                    'inner_operator': 'is',
                    'outer_operator': 'and'
                }
            ], 'outer_operator': 'and'}]
        )
        Segment.objects.create(
            name="Chrome Only Subscribers",

            groups=[{'filters': [
                {
                    'name': 'browser',
                    'value': 'chrome',
                    'inner_operator': 'is',
                    'outer_operator': 'and'
                }
            ], 'outer_operator': 'and'}]
        )
        Segment.objects.create(
            name="Mozilla Only Subscribers",

            groups=[{'filters': [
                {
                    'name': 'browser',
                    'value': 'firefox',
                    'inner_operator': 'is',
                    'outer_operator': 'and'
                }
            ], 'outer_operator': 'and'}]
        )
        Segment.objects.create(
            name="US Only Subscribers",

            groups=[{'filters': [
                {
                    'name': 'country_code',
                    'value': 'US',
                    'inner_operator': 'is',
                    'outer_operator': 'and'
                }
            ], 'outer_operator': 'and'}]
        )

