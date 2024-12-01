from rest_framework import serializers
from .models import materia

class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model= materia
        fields = "__all__"
