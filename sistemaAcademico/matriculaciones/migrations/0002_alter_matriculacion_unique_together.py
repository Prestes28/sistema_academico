# Generated by Django 5.1.3 on 2024-12-01 21:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('alumnos', '0001_initial'),
        ('materias', '0003_alter_materia_cuposlibres_delete_matricula'),
        ('matriculaciones', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='matriculacion',
            unique_together={('alumno', 'materia')},
        ),
    ]