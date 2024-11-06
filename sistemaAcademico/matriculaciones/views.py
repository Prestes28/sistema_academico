# inscripciones/views.py
from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from .models import matriculacion
from alumnos.models import alumno
from materias.models import materia
from rest_framework import viewsets
from .serializer import MatriculacionSerializer


# Create your views here.
class MatriculacionView(viewsets.ModelViewSet):
    serializer_class= MatriculacionSerializer
    queryset = matriculacion.objects.all()


# def inscribir_alumno(request, alumno_id, materia_id):
#     Alumno = get_object_or_404(alumno, id=alumno_id)
#     Materia = get_object_or_404(materia, id=materia_id)

#     try:
#         inscripcion = matriculacion(Alumno=Alumno, Materia=Materia)
#         inscripcion.save()
#         return JsonResponse({"mensaje": "Inscripción exitosa"})
#     except ValueError as e:
#         return JsonResponse({"error": str(e)}, status=400)
