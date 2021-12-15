from django.shortcuts import render
from rest_framework import generics
from .serializers import ComputerSerializer
from .models import Computer

# Create your views here.


class ComputerView(generics.ListAPIView):
    queryset = Computer.objects.all()
    serializer_class = ComputerSerializer
