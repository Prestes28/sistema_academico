from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status

class RegisterView(APIView):
    def get(self, request):
        return Response({'message': 'Endpoint de registro disponible'}, status=status.HTTP_200_OK)
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password)
        return Response({'message': 'Usuario creado exitosamente'}, status=status.HTTP_201_CREATED)

# Create your views here.
