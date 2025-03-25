import django
django.setup()

from django.urls import path
from . import views

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('', views.UserListAPIView.as_view()),
    path('register/', views.UserRegisterAPIView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name="token obtain"),
    path('token/refresh', TokenRefreshView.as_view(), name="token refresh"),
    path('<uuid:pk>/', views.UserDetailAPIView.as_view(), name="user detail"),
]
