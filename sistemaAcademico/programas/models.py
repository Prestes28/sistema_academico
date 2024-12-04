from django.db import models

# Create your models here.
from django.contrib.auth.models import User

class Programa(models.Model):
    nombre = models.CharField(max_length=100)
    estado = models.BooleanField(default=False)  # Activo (True) o Inactivo (False)
    url = models.URLField()
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} ({'Activo' if self.estado else 'Inactivo'})"