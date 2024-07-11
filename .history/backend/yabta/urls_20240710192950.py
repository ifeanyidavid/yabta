from django.contrib import admin
from django.urls import path
from api.views import CreateUserView
from rest_framework import 

urlpatterns = [
    path('admin/', admin.site.urls),

]
