from django.urls import path

from . import views

urlpatterns = [
    path('', views.RoomListCreateAPIView.as_view(), name='room create list'),
    path('<uuid:pk>/', views.RoomDetailAPIView.as_view(), name="room detail"),
    path('join/<uuid:room_id>/', views.RoomJoinAPIView.as_view(), name="room join"),
    path('leave/<uuid:room_id>/', views.RoomLeaveAPIView.as_view(), name="room leave"),
    path('members/<uuid:room_id>/', views.RoomListMemberAPIView.as_view(), name="get room members")
]
