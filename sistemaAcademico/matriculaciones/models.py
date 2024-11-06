from django.db import models
from materias.models import materia
from alumnos.models import alumno

# Create your models here.
class matriculacion(models.Model):
   alumno = models.ForeignKey(alumno, on_delete=models.CASCADE, related_name="matriculaciones")
   materia = models.ForeignKey(materia,on_delete=models.CASCADE,related_name="matriculaciones")
   fecha_inscripcion = models.DateField(auto_now_add= True)
    
   def save(self,*args, **kwargs):
        #verifica el cupo antes de inscribir al alumno
        if self.materia.matriculaciones.count() < self.materia.cuposLibres:
            super().save(*args,**kwargs)
        else:
            raise ValueError("No hay cupo disponible para esta materia")
     
class Meta:
  unique_together = ("alumno","materia")

