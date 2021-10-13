# desafio-bridge
Desafio Web Dev do Laboratório Bridge

Olá! Essa é a minha solução para o Desafio Web Dev Full Stack do Laboratório Bridge. Ele é um Web app que permite aos usuários calcularem múltiplos duodigitos e checarem o histórico de entradas na aplicação. O desafio será feito em Python com Django para o Backend e Javascript e React e o framework CSS Tailwind para o Frontend. O objetivo da aplicação é receber um número X > 100 do usuário e encontrar o menor número real duodígito* múltiplo de X.

* Duodígito significa que um número só pode ser construído por até dois algarismos distintos. Exemplos de números duodígitos são 1221, 338, 4444, 3737

Exemplo de entrada: 999
Exemplo de saída: 9990 (menor número múltiplo de 999 que é um duodígito)

## Demo em Servidor

Usei o [Heroku](https://www.heroku.com/) para dar hospedar meu aplicativo:

- [Link para Demo em Servidor](https://duodigit-site.herokuapp.com/)


## Passos para instalação local:
    1) - Clonar o repositório para o seu sistema

    $ git clone https://github.com/arthurwinck/desafio-bridge.git

    2) - Dentro da pasta do projeto, instalar o framework django e a biblioteca django-rest-framework
    
    $ cd desafio-bridge
    $ pip install -r requirements.txt

    3) - Então, no mesmo local, iremos atualizar o banco de dados para usar as tabelas que criamos no projeto, para isso:

    $ python manage.py makemigrations
    $ python manage.py migrate

    4) - Agora, precisamos acessar a pasta "frontend" do projeto e instalar os módulos usando o yarn ou npm (nesse caso será usado yarn)

    $ cd frontend
    $ yarn install

    5) - Como o projeto foi feito para usar o "index.html" gerado pelo react, iremos criar uma build do nosso projeto

    $ yarn build

    6) - Agora, podemos começar a execução do Django, antes voltando para a pasta pai do repositório:

    $ cd ..
    $ python manage.py runserver
    
    
## Demo de Utilização



https://user-images.githubusercontent.com/46870164/137045220-b0934284-e4ea-4556-9ddf-601ba112819c.mp4

