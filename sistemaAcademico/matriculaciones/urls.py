# inscripciones/urls.py
from django.urls import path, include
from rest_framework import routers
from matriculaciones import views

router = routers.DefaultRouter()
router.register(r"matriculacion",views.MatriculacionView, "matriculaciones")

urlpatterns = [
    path('inscribir/',include(router.urls)),
]
