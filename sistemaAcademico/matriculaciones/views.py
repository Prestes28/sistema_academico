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

class MatriculacionDetail(APIView):
    def get(self, request):
        alumno_id = request.query_params.get('alumno')
        materia_id = request.query_params.get('materia')

        try:
            matriculacion = matriculacion.objects.get(alumno_id=alumno_id, materia_id=materia_id)
            return Response({"id": matriculacion.id}, status=status.HTTP_200_OK)
        except matriculacion.DoesNotExist:
            return Response({"error": "Matricula no encontrada"}, status=status.HTTP_404_NOT_FOUND)