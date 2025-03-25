import django
django.setup()

from rest_framework import generics, filters, status
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response

from .models import Room, RoomMember, Message
from .serializers import *
from .permissions import IsOwnerOrReadOnly

from users.serializers import UserSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your views here.
class RoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [permissions.IsAuthenticated]
    
class RoomCreateAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        data = {
            "title": request.data['title'],
            "description": request.data['description'],
            "host": request.user.id
        }
        
        serializer = RoomCreateSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        
        room = serializer.save()
        RoomMember.objects.create(user=self.request.user, room=room)
        
        return Response(serializer.data)
    
class RoomDetailAPIView(generics.RetrieveDestroyAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    
class RoomJoinAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request, room_id):
        try:
            room = Room.objects.get(id=room_id)
        except Room.DoesNotExist:
            return Response({ "error": "Room not found" })
        
        data = {
            "user": request.user.id,
            "room": room.id
        }
        
        serializer = RoomMemberSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()    
        return Response(serializer.data)

class RoomLeaveAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def delete(self, request, room_id):
        try:
            roomMember = RoomMember.objects.get(user=request.user, room=room_id)
        except RoomMember.DoesNotExist:
            return Response({ "error": "You're not a member of the group" })
        
        roomMember.delete()
        return Response({ "message": "You've left the group mf!" })
    
class RoomListMemberAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request, room_id):
        try:
            roomMembers = RoomMember.objects.filter(room=room_id)
        except RoomMember.DoesNotExist:
            return Response({ "error": "This group has no members" })
        
        serializer = RoomMemberJoinedSerializer(roomMembers, many=True)
        return Response(serializer.data)
    
class RoomSearchAPIView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']
    
class MessageListAPIView(generics.ListAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        room_id = self.kwargs['room_id']
        return Message.objects.filter(room=room_id)
    
class MessageSendAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request, room_id):
        try:
            room = Room.objects.get(id=room_id)
        except Room.DoesNotExist:
            return Response({ "error": "Room doesn't exist you idiot" })
        
        data = {
            "sender": request.user.id,
            "room": room.id,
            "content": request.data['content']
        }
        
        serializer = MessageSendSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
class JoinedRoomsAPIView(APIView):
    permissions_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        try:
            rooms = RoomMember.objects.filter(user=request.user)
        except RoomMember.DoesNotExist:
            return Response({ 'message': "You've joined no rooms mf" })
        
        serializer = RoomJoinedSerializer(rooms, many=True)
        return Response(serializer.data)
        
        
        