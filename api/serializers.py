from unittest.util import _MAX_LENGTH
from wsgiref import validate
from rest_framework import serializers, validators
from .models import Computer, Profile
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.validators import UniqueValidator

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email")

class ProfileSerializer(serializers.ModelSerializer):
    birth_date = serializers.DateField(required=True)
    country = serializers.CharField(required=True, max_length=50)
    address = serializers.CharField(required=True, max_length=50)
    avatar = serializers.ImageField()

    def create(self, validated_data):
        profile = Profile.objects.get_or_create(user=user)
        profile.birth_date = validated_data["birth_date"]
        profile.country = validated_data["country"]
        profile.address = validated_data["address"]
        profile.avatar = validated_data["avatar"]
        profile.save()

    class Meta:
        model = Profile
        fields = ("birth_date", "country", "address" "avatar")

class RegisterSerializer(serializers.ModelSerializer):
    email  = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    username = serializers.CharField(max_length=32, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(min_length=6, max_length=100, write_only=True)

    def create(self, validated_data):
        user = User(username=validated_data["username"], email=validated_data["email"])
        user.set_password(validated_data["password"])
        user.save()

        return user

    class Meta:
        model = User
        fields = ("id", "username", "email", "password")

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