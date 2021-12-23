from django.urls import path
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
]