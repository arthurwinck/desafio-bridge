from django.db import models

#Criar uma classe que represente as entradas do usuário no aplicativo, e toda que vez que invocada, calcular
#o múltiplo duodígito

class EntradaDuodigito(models.Model):
    numero = models.BigIntegerField(default=0)
    multiplo_duodigito = models.BigIntegerField(default=0)
    criado_em = models.DateTimeField(auto_now_add=True)