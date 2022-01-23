from re import S
from this import d
from django.urls import reverse
from rest_framework.serializers import Serializer
from .serializers import ComputerSerializer, LoginSerializer, RegisterSerializer, UserSerializer, ProfileSerializer
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
    permission_classes = (AllowAny,)
    http_method_names = ["post"]

    def post(self, request, format="json", *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                token, created = Token.objects.get_or_create(user=user)
                return Response({"isCreated": "true"}, status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserAuth(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)
    http_method_names = ["post"]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if serializer.is_valid():
            user = serializer.validated_data
            profile = Profile.objects.get(user=user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "user": UserSerializer(user).data,
                "profile": ProfileSerializer(profile).data,
                "token": token.key
            })
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetUser(generics.GenericAPIView):
    permission_classes = (IsAuthenticated,)

    serializer_class = UserSerializer

    def post(self, *args, **kwargs):
        return Response({
            "user": UserSerializer(self.request.user).data
        })