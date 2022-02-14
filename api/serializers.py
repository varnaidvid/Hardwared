from wsgiref import validate
from rest_framework import serializers, validators
from .models import Computer, Profile, Rating
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

    class Meta:
        model = Profile
        fields = ("birth_date", "country", "address", "avatar")

class RegisterSerializer(serializers.ModelSerializer):
    email  = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    username = serializers.CharField(max_length=32, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(min_length=6, max_length=100, write_only=True)

    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data["username"],
            email = validated_data["email"],
        )
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
        fields = ("id", "generation", "name", "price", "sale", "sale_duration", "stock", "gpu", "gpu_type", "cpu", "cpu_type", "memory", "storage", "storage_type", "created_at")

class CreateComputerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = ("generation", "name", "price", "stock")