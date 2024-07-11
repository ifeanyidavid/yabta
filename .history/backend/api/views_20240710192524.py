from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

from backend.api import serializers


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializers