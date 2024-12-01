from django.shortcuts import render
from rest_framework import viewsets
from .serializer import AlumnoSerializer 
from .models import alumno
from rest_framework.response import Response

# Create y.our views here

class AlumnoView(viewsets.ModelViewSet):
    serializer_class= AlumnoSerializer
    queryset = alumno.objects.all()

