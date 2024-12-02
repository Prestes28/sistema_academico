from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from alumnos.models import alumno
from materias.models import materia
from matriculaciones.models import matriculacion
from alumnos.serializer import AlumnoSerializer
from materias.serializer import MateriaSerializer
from matriculaciones.serializer import MatriculacionSerializer

class ConsolidatedDataView(APIView):
    def get(self, request):
        matriculaciones = matriculacion.objects.select_related('alumno', 'materia').all()
        data = [
            {
                "alumno": {
                    "id": matriculacion.alumno.id,
                    "nombre": matriculacion.alumno.nombre,
                    "apellido": matriculacion.alumno.apellido,
                    "fechaNacimiento":matriculacion.alumno.fecha_nac,
                },
                "materia": {
                    "id": matriculacion.materia.id,
                    "nombre": matriculacion.materia.nombre,
                    "cupo": matriculacion.materia.cuposLibres,
                },
                "fecha_inscripcion": matriculacion.fecha_inscripcion,
            }
            for matriculacion in matriculaciones
        ]
        return Response(data, status=status.HTTP_200_OK)
