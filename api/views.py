from django.urls import reverse
from rest_framework.serializers import Serializer
from .serializers import ComputerSerializer, UserSerializer
from .models import Computer, Profile
from django.contrib.auth.models import User

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAdminUser

class ComputerView(generics.ListAPIView):
    queryset = Computer.objects.all()
    serializer_class = ComputerSerializer

class UserCreate(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format="json"):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetUsers(APIView):
    permission_classes = (IsAdminUser,)

    def get(self, request, format="json"):
        serializer = UserSerializer(data=User.objects.all())
        if serializer.is_valid():
            json = serializer.data
            return Response(json, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)