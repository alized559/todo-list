# Generated by Django 4.0.3 on 2022-08-20 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0002_rename_todos_todo'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='deadline',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='todo',
            name='description',
            field=models.TextField(max_length=100000, null=True),
        ),
    ]