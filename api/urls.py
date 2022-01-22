from django.urls import path, re_path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("", views.GetUser.as_view()),
    path("user/register/", views.UserCreate.as_view(), name="register_user"),
    path("user/login/", views.UserAuth.as_view(), name="auth_user"),
    path("user/logout/", views.UserAuth.as_view(), name="auth_user"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
