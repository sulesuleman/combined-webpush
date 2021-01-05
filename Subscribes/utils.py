import random
import string


def generate_segment_key():
    return 'SK-' + ''.join(random.sample(
        string.ascii_uppercase + '1234567890', 12))


class UserAgentExtended:
    def __init__(self, user_agent):
        self.user_agent = user_agent
        self.browser = self.__browser()
        self.browser_version = self.__browser_version()
        self.platform = self.__platform()
        self.operating_system = self.__operating_system()
        self.operating_system_version =\
            self.__operating_system_version()

    def __browser(self):
        return self.user_agent.browser.family.lower().split(' ')[0]

    def __browser_version(self):
        return self.user_agent.browser.version_string.lower()

    def __platform(self):
        return 'mobile' if self.user_agent.is_mobile else\
            'tablet' if self.user_agent.is_tablet else\
            'desktop' if self.user_agent.is_pc else \
            'bot' if self.user_agent.is_bot else 'other'

    def __operating_system(self):
        return self.user_agent.os.family.lower()

    def __operating_system_version(self):
        return self.user_agent.os.version_string.lower()
