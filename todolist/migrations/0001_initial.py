# Generated by Django 4.1 on 2022-08-20 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todos',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('label', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=100000)),
                ('text_color', models.CharField(max_length=100)),
                ('background_color', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'todos',
            },
        ),
    ]
