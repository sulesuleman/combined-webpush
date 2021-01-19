from django.db import models

from accounts.abstract import UserOneToOne, TimeStampedFields

# Create your models here.


class UploadedImage(UserOneToOne,TimeStampedFields):
    file = models.ImageField()
