from django.urls import path, include
from rest_framework import routers
from alumnos import views
#api version
router= routers.DefaultRouter()
router.register(r"alumno", views.AlumnoView,"alumnos")
urlpatterns =[
    path("api/v1/",include(router.urls))
]

"""
Crea los:
GET
POST
PUT
DELETE
"""