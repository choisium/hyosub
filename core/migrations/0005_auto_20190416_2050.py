# Generated by Django 2.1.7 on 2019-04-16 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20190415_2358'),
    ]

    operations = [
        migrations.AlterField(
            model_name='panel',
            name='image',
            field=models.FileField(upload_to=''),
        ),
    ]