from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

import uuid

# Create your models here.
class Room(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=300)
    description = models.TextField(null=True, blank=True)
    host = models.ForeignKey(User, on_delete=models.CASCADE)
    members_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def increment_member_count(self):
        self.members_count += 1
        self.save(update_fields=["members_count"])

    def decrement_member_count(self):
        if self.members_count > 0:
            self.members_count -= 1
            self.save(update_fields=["members_count"])
    
    def __str__(self):
        return self.title
    
class RoomMember(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    joined_at = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.room.increment_member_count()

    def delete(self, *args, **kwargs):
        super().delete(*args, **kwargs)
        self.room.decrement_member_count()
    
    class Meta:
        unique_together = ('user', 'room')