from rest_framework import serializers
from .models import Computer


class ComputerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = ('id', 'generation', 'name', 'price', 'stock', 'created_at')