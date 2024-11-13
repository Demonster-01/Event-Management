# Generated by Django 5.1.3 on 2024-11-12 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0005_ourwork"),
    ]

    operations = [
        migrations.CreateModel(
            name="Package",
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
                ("Description", models.CharField(max_length=1000)),
                ("Price", models.IntegerField(default=1000)),
                (
                    "poster",
                    models.ImageField(default="default.jpg", upload_to="Package_img"),
                ),
            ],
        ),
    ]