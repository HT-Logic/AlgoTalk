from rest_framework import serializers

from .models import Room, RoomMember
from users.serializers import UserSerializer

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'title', 'description', 'host', 'created_at']
        
class RoomMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomMember
        fields = ['id', 'user', 'room', 'joined_at']
        
class RoomMemberJoinedSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = RoomMember
        fields = ['id', 'user', 'room', 'joined_at']