from rest_framework import serializers
from .models import matriculacion
from django.core.exceptions import ValidationError

class MatriculacionSerializer(serializers.ModelSerializer):
    class Meta:
        model= matriculacion
        fields = "__all__"
    
    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except ValidationError as e:
            raise serializers.ValidationError({"detail":str(e)})

