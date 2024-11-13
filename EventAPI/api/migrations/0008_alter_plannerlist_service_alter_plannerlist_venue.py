# Generated by Django 5.1.3 on 2024-11-13 13:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0007_plannerlist"),
    ]

    operations = [
        migrations.AlterField(
            model_name="plannerlist",
            name="Service",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="api.service",
            ),
        ),
        migrations.AlterField(
            model_name="plannerlist",
            name="Venue",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="api.venue",
            ),
        ),
    ]
