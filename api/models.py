from email.policy import default
from random import choices
from statistics import quantiles
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models.signals import post_save
from django.db.models import Avg
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from io import BytesIO
from PIL import Image
from django.core.files import File


def make_avatar(avatar, size, uid):
    img = Image.open(avatar)
    avatar = img.convert("RGB")
    avatar.thumbnail(size)
    thumb_io = BytesIO()
    avatar.save(thumb_io, "JPEG", quality=100)
    avatar = File(thumb_io, name=f"{uid}_pfp.jpeg",)
    return avatar    

class Profile(models.Model):
    def user_directory_path(self, filename):
        return f"profile/user_{self.user.pk}/{filename}"

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = models.DateField(blank=True, null=True)
    country = models.CharField(max_length=30, blank=True)
    address = models.CharField(max_length=30, blank=True)
    avatar = models.ImageField(default="profile/default.jpg", upload_to=user_directory_path)

    def save(self, *args, **kwargs):
        self.avatar = make_avatar(avatar=self.avatar, size=(150, 150), uid=self.user.username)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user}'s profile"

@receiver(post_save, sender=User)
def create_user_token(sender, instance, created, **kwargs):
    if created:
        token = Token.objects.create(user=instance)
        token.save()

class Computer(models.Model):     
    generation = models.CharField(max_length=8, default="")
    name = models.CharField(max_length=30, unique=True)
    sale = models.IntegerField(null=True, blank=True, default=None)
    sale_duration = models.DateTimeField(blank=True, null=True, default=None)
    price = models.IntegerField(null=False, blank=False)
    stock = models.IntegerField(blank=False, null=False)
    created_at = models.DateTimeField(default=timezone.now)

    gpu_choices = (
        ("NVIDIA", "NVIDIA"),
        ("AMD", "AMD")
    )
    cpu_choices = (
        ("INTEL", "INTEL"),
        ("AMD", "AMD")
    )
    memory_choices = (
        ("8 GB", "8 GB"),
        ("16 GB", "16 GB"),
        ("32 GB", "32 GB"),
        ("64 GB", "64 GB"),
    )
    storage_choices = (
        ("SSD", "SSD"),
        ("HDD", "HDD"),
        ("SSD & HDD", "SSD & HDD")
    )

    gpu = models.CharField(max_length=20, null=False)
    gpu_type = models.CharField(max_length=20, null=False, choices=gpu_choices)
    cpu = models.CharField(max_length=20, null=False)
    cpu_type = models.CharField(max_length=10, null=False, choices=cpu_choices)
    memory = models.CharField(max_length=10, null=False, choices=memory_choices)
    storage = models.CharField(max_length=20, null=False)
    storage_type = models.CharField(max_length=10, null=False, choices=storage_choices)

    def __str__(self):
        return f"{self.name}"

    def get_rating(self):
        return self.__class__.objects.filter(pk=self.pk).aggregate(Avg("ratings__rating"))

    class Meta:
        ordering = ["created_at"]

class Rating(models.Model):
    computer = models.ForeignKey(Computer, related_name="ratings", on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.FloatField(null=False)

    def __str__(self):
        return f"{self.user.username} on {self.computer}"
    