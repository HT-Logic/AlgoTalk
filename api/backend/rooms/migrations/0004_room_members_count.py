# Generated by Django 5.1.7 on 2025-03-21 07:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0003_alter_roommember_unique_together'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='members_count',
            field=models.IntegerField(default=0, max_length=200),
        ),
    ]
