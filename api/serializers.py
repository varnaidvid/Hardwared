from rest_framework import serializers
from rest_framework import validators
from .models import Computer, Profile
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=32, validators=[UniqueValidator(queryset=User.objects.all())])
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(min_length=8, max_length=100, write_only=True)
    
    def create(self, validated_data):
        user = User.objects.create(validated_data["username"], validated_data["email"])
        user.set_password(validated_data["password"])
        user.save()
        return user

    class Meta:
        model = User
        fields = ("id", "username", "email", "password")



class LoginSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data["user"] = UserSerializer


class ComputerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = ("id", "generation", "name", "price", "stock", "created_at")

class CreateComputerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = ("generation", "name", "price", "stock")