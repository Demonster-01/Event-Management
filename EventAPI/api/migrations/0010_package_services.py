# Generated by Django 5.1.3 on 2024-11-14 05:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0009_rename_booked_at_plannerlist_booked_at_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="package",
            name="services",
            field=models.ManyToManyField(related_name="packages", to="api.service"),
        ),
    ]