# inscripciones/views.py
from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from django.core.exceptions import ValidationError
from .models import matriculacion
from alumnos.models import alumno
from materias.models import materia
from rest_framework import viewsets , status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import MatriculacionSerializer


# Create your views here.
class MatriculacionView(viewsets.ModelViewSet):
    serializer_class= MatriculacionSerializer
    queryset = matriculacion.objects.all()


class MatriculacionCreateView(APIView):
    def post(self, request):
        serializer = MatriculacionSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except ValidationError as e:
                return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# def inscribir_alumno(request, alumno_id, materia_id):
#     Alumno = get_object_or_404(alumno, id=alumno_id)
#     Materia = get_object_or_404(materia, id=materia_id)

#     try:
#         inscripcion = matriculacion(Alumno=Alumno, Materia=Materia)
#         inscripcion.save()
#         return JsonResponse({"mensaje": "Inscripción exitosa"})
#     except ValueError as e:
#         return JsonResponse({"error": str(e)}, status=400)
