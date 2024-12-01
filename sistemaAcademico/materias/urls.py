from django.urls import path, include
from rest_framework import routers
from materias import views

#api version
router = routers.DefaultRouter()
router.register(r"materia",views.MateriaView, "materias")

urlpatterns =[
    path("api/v1/",include(router.urls))
]