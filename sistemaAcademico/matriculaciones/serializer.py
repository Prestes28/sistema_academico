from rest_framework import serializers
from .models import matriculacion

class MatriculacionSerializer(serializers.ModelSerializer):
    class Meta:
        model= matriculacion
        fields = "__all__"
