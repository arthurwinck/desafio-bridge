from django.db import models
import time
#Criar uma classe que represente as entradas do usuário no aplicativo, e toda que vez que invocada, calcular
#o múltiplo duodígito

class EntradaDuodigito(models.Model):
    numero = models.BigIntegerField(default=0)
    
    tempo1 = time.perf_counter()
    # Cálculo do número duodígito
    multiplo_duodigito= models.BigIntegerField(default=0, editable=False)
    tempo2 = time.perf_counter()
    tempo_final = tempo2 - tempo1
    # Agora para sabermos o tempo necessário para achar o múltiplo, diminuimos um tempo do outro
    tempo_duodigito = models.IntegerField(default=tempo_final)
    criado_em = models.DateTimeField(auto_now_add=True)

