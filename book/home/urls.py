from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='root_path'),
    path('homepage/', views.homepage),
]
