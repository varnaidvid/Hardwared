from django.urls import path, re_path, include
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path("", views.ComputerView.as_view()),
    path("user/create/", views.UserCreate.as_view(), name="create_user"),
    path("user/token/obtain/", obtain_auth_token, name="token_obtain")
]
