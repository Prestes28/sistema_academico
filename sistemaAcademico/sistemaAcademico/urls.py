"""
URL configuration for sistemaAcademico project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path, include
from usuarios.views import RegisterView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("alumnos/", include("alumnos.urls")),
    path("materias/",include("materias.urls")),
    path('inscripciones/', include('matriculaciones.urls')),
    path('tabla/',include('tabla.urls')),
    path("programas/", include("programas.urls")),
    path('api/token-auth/', obtain_auth_token, name='token_auth'),
    path("registro/",RegisterView.as_view(), name="registro"),

]
