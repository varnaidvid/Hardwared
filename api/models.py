from statistics import quantiles
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from io import BytesIO
from PIL import Image
from django.core.files import File

class Profile(models.Model):
    def user_directory_path(self, filename):
        return f"profile/user_{self.user.pk}/{filename}"

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = models.DateField(blank=True, null=True)
    country = models.CharField(max_length=30, blank=True)
    avatar = models.ImageField(default="profile/default.jpg", upload_to=user_directory_path)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user}'s profile"

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        profile = Profile.objects.create(user=instance)
        token = Token.objects.create(user=instance)
    profile.save()
    token.save()

class Computer(models.Model):
    generation = models.CharField(max_length=8, default="")
    name = models.CharField(max_length=12, unique=True)
    price = models.IntegerField(null=False)
    stock = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.name}"