from django.urls import path, re_path
from .views import index

urlpatterns = [
    path('', index),
    path('kezdolap/', index),
    path('termekek/', index),
    path('rolunk/', index),
    path('szolgaltatasok/', index),
    path('elerhetoseg/', index),
    path('bejelentkezes/', index),
    path('regisztracio/', index),
    path('fiok/', index),
]