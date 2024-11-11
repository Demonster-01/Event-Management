from django.db import models

# Create your models here.
class Venue(models.Model):
    Name=models.CharField(max_length=50)
    Location=models.CharField(max_length=50)
    Booking_price=models.IntegerField(default=1000)
    No_of_Halls=models.IntegerField(default=1)
    capacity=models.IntegerField(default=1000)
    Area = models.IntegerField(default=1000)
    Parking= models.BooleanField(null=False, default=False)
    # poster = models.ImageField(default="default", upload_to='movie_poster')
    
    class Meta:
        unique_together = ('Name', 'Location')

    def __str__(self):
        return self.Name
    
    
class Service(models.Model):
    Name=models.CharField(max_length=50)
    Description=models.CharField(max_length=100)
    Price=models.IntegerField(default=1000)
    # poster = models.ImageField(default="default", upload_to='movie_poster')
    
    