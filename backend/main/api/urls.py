from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import TextViewSet

text_router = DefaultRouter()
text_router.register(r'texts', TextViewSet)