from django.urls import path, re_path, include
from . import views

urlpatterns = [
    path("products/", views.ComputerView.as_view()),
    path("products/<int:id>/", views.ComputerView.as_view()),
    path("products/cart_count/", views.CartItemCount.as_view()),
    path("user/register/", views.UserCreate.as_view(), name="register_user"),
    path("user/login/", views.UserAuth.as_view(), name="auth_user"),
    path("user/logout/", views.UserAuth.as_view(), name="auth_user"),
    path("cart/", views.CartView.as_view(), name="view_cart"),
    path("cart/add/", views.CartItemCreate.as_view(), name="create_cart_item"),
    path("cart/delete/", views.CartItemDelete.as_view(), name="delete_cart_item"),
]
