import django
django.setup()

from django.urls import path

from . import views

urlpatterns = [
    path('', views.RoomListAPIView.as_view(), name='room list'),
    path('create/', views.RoomCreateAPIView.as_view(), name='room create'),
    path('search/', views.RoomSearchAPIView.as_view(), name='room search list'),
    path('<uuid:pk>/', views.RoomDetailAPIView.as_view(), name="room detail"),
    path('join/<uuid:room_id>/', views.RoomJoinAPIView.as_view(), name="room join"),
    path('leave/<uuid:room_id>/', views.RoomLeaveAPIView.as_view(), name="room leave"),
    path('members/<uuid:room_id>/', views.RoomListMemberAPIView.as_view(), name="get room members"),
    path('joined/', views.JoinedRoomsAPIView.as_view(), name="get joined rooms"),
    path('messages/<uuid:room_id>/', views.MessageListAPIView.as_view(), name="get messages"),
    path('send/<uuid:room_id>/', views.MessageSendAPIView.as_view(), name="send message"),
]