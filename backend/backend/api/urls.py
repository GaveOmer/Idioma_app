from rest_framework.routers import DefaultRouter
from main.api.urls import text_router
from django.urls import path,include

router = DefaultRouter()
#texts
router.registry.extend(text_router.registry)

urlpatterns = [
  path('', include(router.urls)),
]