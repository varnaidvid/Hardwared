from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    roles = (
        (0, "default"),
        (1, "support"),
        (2, "admin"),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=roles, default=0)
    birth_date = models.DateField(blank=True, null=True)
    country = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return f"{self.user}'s profile"

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()

class Computer(models.Model):
    generation = models.CharField(max_length=8, default="")
    name = models.CharField(max_length=12, unique=True)
    price = models.IntegerField(null=False)
    stock = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.name}"