# Generated by Django 5.1.3 on 2024-11-11 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Service",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(max_length=50)),
                ("Description", models.CharField(max_length=100)),
                ("Price", models.IntegerField(default=1000)),
            ],
        ),
        migrations.CreateModel(
            name="Venue",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(max_length=50)),
                ("Location", models.CharField(max_length=50)),
                ("Booking_price", models.IntegerField(default=1000)),
                ("No_of_Halls", models.IntegerField(default=1)),
                ("capacity", models.IntegerField(default=1000)),
                ("Area", models.IntegerField(default=1000)),
                ("Parking", models.BooleanField(default=False)),
            ],
            options={
                "unique_together": {("Name", "Location")},
            },
        ),
    ]