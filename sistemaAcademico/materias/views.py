from django.shortcuts import render
from rest_framework import viewsets
from .serializer import MateriaSerializer
from .models import materia

# Create your views here.
class MateriaView(viewsets.ModelViewSet):
    serializer_class= MateriaSerializer
    queryset = materia.objects.all()

    