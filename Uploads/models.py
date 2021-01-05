from django.db import models

from Accounts.abstract import UserOneToOne, TimeStampedFields

# Create your models here.


class UploadedImage(UserOneToOne,TimeStampedFields):
    file = models.ImageField()
