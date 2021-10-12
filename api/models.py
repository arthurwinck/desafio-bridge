from django.db import models
import time
#Criar uma classe que represente as entradas do usuário no aplicativo, e toda que vez que invocada, calcular
#o múltiplo duodígito

class EntradaDuodigito(models.Model):
    
    # Função que retorna um bool dizendo se o número é duodígito ou não
    def checarDuoDigito(self, numero):
        string_numero = str(numero)
        lista_numero = list(string_numero)

        digitos_distintos = []
        duodigito = True

        for digito in lista_numero:
            if digito not in digitos_distintos:
                digitos_distintos.append(digito)

            if len(digitos_distintos) > 2:
                duodigito = False
                break

        return duodigito

    # Função para calcular um número duodígito, também obtemos o tempo necessário para realizar o cálculo
    def calcularDuoDigito(self, numero):
        
        tempo1 = time.perf_counter()
        multiplo = 0
        i = 1
        
        while True:
            multiplo = numero*i
            duodigito = self.checarDuoDigito(multiplo)

            if duodigito:
                break

            i += 1

        tempo2 = time.perf_counter()
        tempo_total = tempo2 - tempo1
        # Atualizamos o objeto com o seu duodígito e o tempo levado para o cálculo
        return [multiplo, tempo_total]


    numero = models.BigIntegerField(default=0)
    multiplo_duodigito = models.BigIntegerField(default=100, editable=False)
    tempo_duodigito = models.DecimalField(default=0, max_digits=10, decimal_places=3)
    criado_em = models.DateTimeField(auto_now_add=True)

    

    

