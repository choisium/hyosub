# Generated by Django 2.1.7 on 2019-04-17 01:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_panel_is_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sentence',
            name='sentence',
            field=models.CharField(max_length=1000),
        ),
    ]
