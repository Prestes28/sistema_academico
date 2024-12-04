from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Programa
from .serializer import ProgramaSerializer
from rest_framework.permissions import IsAuthenticated

class ProgramaListCreate(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """
        Obtiene la lista de programas del usuario autenticado.
        """
        programas = Programa.objects.filter(usuario=request.user)
        serializer = ProgramaSerializer(programas, many=True)
        return Response(serializer.data)

    def post(self, request):
        """
        Crea un nuevo programa asociado al usuario autenticado.
        """
        serializer = ProgramaSerializer(data=request.data, context={'request': request})  # Pasar el contexto con el request
        if serializer.is_valid():
            # Guarda el programa con el usuario actual
            serializer.save(usuario=request.user)  # Asegúrate de que el usuario se asigne
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

