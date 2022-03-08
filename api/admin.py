from django.contrib import admin
from .models import Computer, Profile, Rating, Cart, CartItem

admin.site.register(Computer)
admin.site.register(Profile)
admin.site.register(Rating)
admin.site.register(Cart)
admin.site.register(CartItem)