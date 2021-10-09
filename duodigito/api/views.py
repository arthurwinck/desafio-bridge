from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import generics

from .models import EntradaDuodigito
from .serializers import EntradaDuoDigitoSerializer

# Aqui criaremos a view que se enviará os dados JSON para o nosso frontend

class EntradaDuodigitoView(generics.ListAPIView):
    queryset = EntradaDuodigito.objects.all()
    serializer_class = EntradaDuoDigitoSerializer
