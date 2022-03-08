from django.urls import path, re_path
from .views import index
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', index),
    path('kezdolap/', index),
    path('termekek/', index),
    path('rolunk/', index),
    path('szolgaltatasok/', index),
    path('elerhetoseg/', index),
    path('bejelentkezes/', index),
    path('regisztracio/', index),
    path('fiok/beallitasok', index),
    path('fiok/kosar', index),
    path('fiok/rendelesek', index),
    path('fiok/kedvenceim', index),
    path('fiok/', index),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)