from django.urls import path
from .views import ComputerView

urlpatterns = [
    path('', ComputerView.as_view()),
]
