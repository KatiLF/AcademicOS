# Generated by Django 4.1.7 on 2023-03-27 12:28

import api.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile',
            field=models.ForeignKey(default=api.models.profile_default, on_delete=django.db.models.deletion.SET_DEFAULT, to='api.profile'),
        ),
    ]
