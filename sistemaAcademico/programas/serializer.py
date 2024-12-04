from rest_framework import serializers
from .models import Programa

class ProgramaSerializer(serializers.ModelSerializer):
    usuario = serializers.HiddenField(default=serializers.CurrentUserDefault())  # Asigna el usuario automáticamente

    class Meta:
        model = Programa
        fields = '__all__'
