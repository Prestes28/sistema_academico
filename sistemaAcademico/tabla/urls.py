from django.urls import path, include
from rest_framework import routers
from . import views


urlpatterns = [
    # otras rutas
    path('api/consolidated-data/', views.ConsolidatedDataView.as_view(), name='consolidated-data'),
]
