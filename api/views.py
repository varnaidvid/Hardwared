from django.urls import reverse
from .serializers import ComputerSerializer, CreateComputerSerializer, UserSerializer
from .models import Computer, Profile
from django.contrib.auth.models import User

from rest_framework import generics, status, viewsets, filters
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

class ComputerView(generics.ListAPIView):
    queryset = Computer.objects.all()
    serializer_class = ComputerSerializer

class CreateComputerView(APIView):
    serializer_class = CreateComputerSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            return Response()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            generation = serializer.data.generation
            name = serializer.data.name
            price = serializer.data.price
            stock = serializer.data.stock
            host = self.request.session['id']



class UserViewSet(viewsets.ModelViewSet):
    http_method_names = ["get"]
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ["updated"]
    ordering = ["-updated"]
    
    def get_queryset(self):
        if self.request.user.is_superuser:
            return User.objects.all()
    
    def get_object(self):
        lookup_field_value = self.kwargs[self.lookup_field]
        user = User.objects.get(lookup_field_value)
        self.check_object_permissions(self.request, user)
        return user