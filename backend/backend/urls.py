
from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import url
from main.api.views import *
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', TextView.as_view(), name='text'),
    
]
