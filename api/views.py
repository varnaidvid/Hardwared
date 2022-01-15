from re import S
from this import d
from django.urls import reverse
from rest_framework.serializers import Serializer
from .serializers import ComputerSerializer, LoginSerializer, RegisterSerializer, UserSerializer
from .models import Computer, Profile
from django.contrib.auth.models import User

from rest_framework import generics, status, authentication, exceptions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

class ComputerView(generics.ListAPIView):
    queryset = Computer.objects.all()
    serializer_class = ComputerSerializer

class UserCreate(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "user": UserSerializer(user).data,
            "token": token.key
        })

class UserAuth(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "user": UserSerializer(user).data,
            "token": token.key
        })

class GetUser(generics.GenericAPIView):
    permission_classes = (IsAuthenticated,)

    serializer_class = UserSerializer

    def post(self, *args, **kwargs):
        return Response({
            "user": UserSerializer(self.request.user).data
        })