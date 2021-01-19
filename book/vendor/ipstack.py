import requests
from django.conf import settings


class RequestClient:
    def __init__(self):
        try:
            self.api_access_key = settings.VENDORS['IP_STACK']['API_ACCESS_KEY']
            self.api_endpoint = settings.VENDORS['IP_STACK']['API_ENDPOINT']
        except Exception as e:
            self.__not_implemented_error()

    def __not_implemented_error(self):
        raise NotImplementedError("IP Stack Configurations Missing. "
                                  "Access Key should be found in "
                                  "settings.VENDORS['IP_STACK']['API_ACCESS_KEY']")

    def get_data(self, ip_address):
        url = self.api_endpoint + '/' + ip_address \
              + '?access_key=' + self.api_access_key
        # ToDo Need Logging and exception handling
        response = requests.get(url)
        # ToDo - was thinking to introduce a field in Subscriber (tRUE/Flase)
        #  to check if the api data was good or not
        return response.json() if response.status_code == 200 else {}


rest_client = RequestClient()
