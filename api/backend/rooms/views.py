from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response

from .models import Room, RoomMember
from .serializers import RoomSerializer, RoomMemberSerializer, RoomMemberJoinedSerializer
from .permissions import IsOwnerOrReadOnly

from users.serializers import UserSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your views here.
class RoomListCreateAPIView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [permissions.IsAuthenticated]
    
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
    
        