from django.db import models

# Create your models here.
class alumno(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50) 
    fecha_nac = models.DateField()

    def __str__(self):
        return self.nombre 

