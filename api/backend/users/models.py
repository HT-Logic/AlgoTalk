from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here
class CustomUser(AbstractUser):
    display_name = models.CharField(max_length=250, blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile_pictures/% Y/% m/% d/', blank=True, null=True)
    
    def __str__(self):
        return self.username