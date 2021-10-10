from rest_framework import serializers
from .models import EntradaDuodigito

# Aqui precisamos transformar as informações que vem do modelo (em python) para um formato compatível com
# o uso da API = JSON 

class EntradaDuoDigitoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntradaDuodigito
        fields = ('id','numero', 'multiplo_duodigito', 'criado_em')


# Essa clase trata a ação que enviar um número para ser calculado por meio do método POST

class CriarEntradaDuodigitoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntradaDuodigito
        fields = ('numero',)
