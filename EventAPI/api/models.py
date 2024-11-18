from django.db import models

# Create your models here.
class Venue(models.Model):
    Name=models.CharField(max_length=50)
    Location=models.CharField(max_length=50)
    Booking_price=models.IntegerField(default=1000)
    No_of_Halls=models.IntegerField(default=1)
    Capacity=models.IntegerField(default=1000)
    Area = models.IntegerField(default=1000)
    Parking= models.BooleanField(null=False, default=False)
    Poster = models.ImageField( null=True, upload_to='Venue_img')
    
    class Meta:
        unique_together = ('Name', 'Location')

    def __str__(self):
        return self.Name
    
    
class Service(models.Model):
    Name=models.CharField(max_length=50)
    Type=models.CharField(max_length=50)
    Description=models.CharField(max_length=1000)
    keywords=models.CharField(max_length=100, null=True, blank=True)
    Price=models.IntegerField(default=1000)
    poster = models.ImageField(default="default.jpg", upload_to='service_img')
    
    def __str__(self):
        return self.Name
    
class OurWork(models.Model):
    Name=models.CharField(max_length=50)
    poster = models.ImageField(default="default.jpg", upload_to='Our Work')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.Name
    
class Package(models.Model):
    Name=models.CharField(max_length=50)
    Description=models.CharField(max_length=1000)
    Price=models.IntegerField(default=1000)
    poster = models.ImageField(default="default.jpg", upload_to='Package_img')
    services = models.ManyToManyField(Service, related_name='packages')
    
    def __str__(self):
        return self.Name
    


from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_approved = models.BooleanField(default=False)  # or CharField, adjust the logic accordingly


    
    def __str__(self):
        return self.user.username
    
class PlannerList(models.Model):
    booked_at = models.DateTimeField(auto_now_add=True)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE, null=True, blank=True)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, null=True, blank=True)
    package= models.ForeignKey(Package, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    session_id = models.CharField(max_length=100, null=True, blank=True)  # For anonymous users

    def __str__(self):
        if self.venue:
            return f"Venue: {self.venue.Name}"
        elif self.service:
            return f"Service: {self.service.Name}"
        elif self.package:
            return f"Package: {self.package.Name}"
        else:
            return "No venue, service, or package"