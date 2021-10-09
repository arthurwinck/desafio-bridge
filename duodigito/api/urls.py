from django.urls import path, include
from .views import EntradaDuodigitoView

# As urls.py basicamente apontam para o endpoints, no nosso caso, o endpoint será localhost/api

urlpatterns = [
    path('', EntradaDuodigitoView.as_view()),
]
