from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator

from .models import EntradaDuodigito
from .serializers import EntradaDuoDigitoSerializer, CriarEntradaDuodigitoSerializer


# Aqui criaremos o GET, que irá buscar todas as solicitações já criadas para o frontend
class EntradaDuodigitoView(generics.ListAPIView):
    queryset = EntradaDuodigito.objects.all()
    serializer_class = EntradaDuoDigitoSerializer

# Aqui vamos implementar o POST, que receberá do frontend as informações para criar uma nova entrada.
class CriarEntradaDuodigitoView(APIView):
    serializer_class = CriarEntradaDuodigitoSerializer

    def post(self, request, format=None):
        
        serializer = self.serializer_class(data=request.data)
        
        # Se a entrada é valida, podemos receber o número, criar um objeto do tipo entrada e guarda-lo no banco de dados

        if serializer.is_valid():
            
            numero = serializer.data.get('numero')
            
            if numero >= 100:
                entrada = EntradaDuodigito(numero=numero)
                [resultado, tempo] = entrada.calcularDuoDigito(numero)
                entrada.multiplo_duodigito = resultado
                entrada.tempo_duodigito = (tempo*(10**3))
                entrada.save()
                status_resposta = status.HTTP_200_OK

            else:
                status_resposta = status.HTTP_400_BAD_REQUEST

        else:
            status_resposta = status.HTTP_500_INTERNAL_SERVER_ERROR

        return Response(EntradaDuoDigitoSerializer(entrada).data,status=status_resposta)


# Essa última classe servirá para dar ao frontend o cookie CSRF, que possibilitará ao frontend fazer requisições POST
@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})