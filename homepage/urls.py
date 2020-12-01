from django.urls import path
from django.contrib import admin
from . import views


urlpatterns = [
    path('', views.ArticleListView.as_view()),
    path('<pk>', views.ArticleDetailView.as_view())
]