from rest_framework import serializers

from .models import Room, RoomMember, Message
from users.serializers import UserSerializer

class RoomSerializer(serializers.ModelSerializer):   
    host = UserSerializer(read_only=True)
     
    class Meta:
        model = Room
        fields = ['id', 'title', 'description', 'host', 'members_count', 'created_at']
        
class RoomCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'title', 'description', 'host', 'members_count', 'created_at']
        
class RoomMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomMember
        fields = ['id', 'user', 'room', 'joined_at']
        
class RoomMemberJoinedSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = RoomMember
        fields = ['id', 'user', 'room', 'joined_at']
        
class MessageSerializer(serializers.ModelSerializer):
    sender = UserSerializer(read_only=True)
    room = RoomSerializer(read_only=True)
    
    class Meta:
        model = Message
        fields = ['id', 'sender', 'room', 'content', 'timestamp']
        
class MessageSendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'sender', 'room', 'content', 'timestamp']