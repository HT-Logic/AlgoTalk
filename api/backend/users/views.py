from rest_framework import generics
from rest_framework import permissions

from django.contrib.auth import get_user_model
User = get_user_model()

from . import serializers

# Create your views here.
class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    
class UserDestroyAPIView(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permissions_classes = [permissions.IsAuthenticated]