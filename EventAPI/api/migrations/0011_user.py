# Generated by Django 5.1.3 on 2024-11-14 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0010_package_services"),
    ]

    operations = [
        migrations.CreateModel(
            name="User",
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
                ("username", models.CharField(max_length=50, unique=True)),
                ("email", models.EmailField(max_length=100, unique=True)),
                ("password", models.CharField(max_length=100)),
            ],
        ),
    ]
