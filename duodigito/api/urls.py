from django.urls import path, include
from .views import EntradaDuodigitoView, CriarEntradaDuodigitoView, GetCSRFToken

# As urls.py basicamente apontam para o endpoints, no nosso caso, o endpoint será localhost/api

urlpatterns = [
    path('', EntradaDuodigitoView.as_view()),
    path('get_cookie/', GetCSRFToken.as_view()),
    path('request/', CriarEntradaDuodigitoView.as_view()),
]
