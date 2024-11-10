from django.db import models

# Create your models here.
class Venue(models.Model):
    Name:models.CharField(max_length=50)
    Booking_price:models.IntegerField(default=1000)