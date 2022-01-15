from rest_framework import serializers, validators
from .models import Computer, Profile
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email")

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "password")
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        user = User.objects.create(username=validated_data["username"], email=validated_data["email"], password=validated_data["password"])
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class ComputerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = ("id", "generation", "name", "price", "stock", "created_at")

class CreateComputerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = ("generation", "name", "price", "stock")