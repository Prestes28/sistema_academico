from django.shortcuts import render
from rest_framework import viewsets
from .serializer import AlumnoSerializer 
from .models import alumno
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({'message': 'Esta es una vista protegida'})

# Create y.our views here

class AlumnoView(viewsets.ModelViewSet):
    serializer_class= AlumnoSerializer
    queryset = alumno.objects.all()
    permission_classes = [IsAuthenticated]
    
