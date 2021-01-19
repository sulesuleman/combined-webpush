from cache_memoize import cache_memoize
# from django.utils import timezone, timesince
# from datetime import timedelta
# from django.db.models import Q, Sum, Func, F, \
#     Count, Case, When, IntegerField, Value
#
# from campaigns.models import Campaign


@cache_memoize(12*60*60)
def get_revenue_stats(last_days=7):
    return {
        "value": 123,
        "rate": -3,
        "since": "Since Yesterday"
    }


@cache_memoize(12*60*60)
def get_campaigns_stats(last_days=1):
    return {
        "value": 123,
        "rate": -3,
        "since": "Since Yesterday"
    }


@cache_memoize(12*60*60)
def get_top_location_stats(last_days=7):
    return [
        {
            "name": "United States",
            "percentage": 3.12
        },
        {
            "name": "Pakistan",
            "percentage": 90.7
        }
    ]


@cache_memoize(12*60*60)
def sales_graph():
    return {
        "last_30_days_sales": [123, 234, 231, 21, 3553, 221, 232, 123, 234, 231,
                               21, 3553, 221, 232, 123, 234, 231, 21, 3553, 221,
                               232, 123, 234, 231, 21, 3553, 221, 232123, 234,
                               231, 21, 3553, 221, 232, 123, 123],
        "last_7_days_sales": [123, 234, 231, 21, 3553, 221, 232]
    }


def get_active_subscriber_stats(last_days=1):
    return {
        "value": 123,
        "rate": -3,
        "since": "Since Yesterday"
    }


def get_impression_stats(last_days=1):
    return {
        "value": 123,
        "rate": -3,
        "since": "Since Yesterday"
    }
