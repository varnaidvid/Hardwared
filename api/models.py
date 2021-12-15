from django.db import models

class Computer(models.Model):
    generation = models.CharField(max_length=8, default="")
    name = models.CharField(max_length=12, unique=True)
    price = models.IntegerField(null=False)
    stock = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)