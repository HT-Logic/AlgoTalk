from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

# Create your models here
class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    display_name = models.CharField(max_length=250, blank=True, null=True)
    
    def __str__(self):
        return self.username