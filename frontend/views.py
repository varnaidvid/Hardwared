from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def index(request, *args, **kwargs):
    return render(request, "frontend/index.html")