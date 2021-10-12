# Generated by Django 3.2.8 on 2021-10-12 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EntradaDuodigito',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero', models.BigIntegerField(default=0)),
                ('multiplo_duodigito', models.BigIntegerField(default=100, editable=False)),
                ('tempo_duodigito', models.DecimalField(decimal_places=5, default=0, max_digits=10)),
                ('criado_em', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]