from rest_framework import serializers, validators
from .models import Computer, Profile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "password")


class ComputerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = ("id", "generation", "name", "price", "stock", "created_at")

class CreateComputerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = ("generation", "name", "price", "stock")