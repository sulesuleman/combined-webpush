from django.core.management.base import BaseCommand, CommandError

from websites.models import Website
from websites.helpers import set_all_integration_files


class Command(BaseCommand):
    help = 'Reset the Integration Files on S3'

    def handle(self, *args, **options):
        for website in Website.objects.all():
            try:
                set_all_integration_files(website)
                self.stdout.write(self.style.SUCCESS(
                    "Successfully reset all integration files for %s" % (website.url,)))
            except Exception as e:
                self.stdout.write(self.style.SUCCESS(
                    "Could not update integration files for %s"
                    "\nError: %s" % (website.url, str(e),)))
