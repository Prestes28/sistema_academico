from django.db import models
from alumnos.models import alumno
# Create your models here.
class materia(models.Model):
    nombre = models.CharField(max_length=50)
    cuposLibres = models.PositiveIntegerField(default=0)
    
   
    def __str__(self):
        return self.nombre 

