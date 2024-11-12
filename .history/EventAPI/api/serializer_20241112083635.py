# serializers.py
from rest_framework import serializers
from .models import Venue,Service

class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = ['id', 'Name', 'Location', 'Capacity','No_of_Halls','Area','Parking','Booking_price','Poster']

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'Name','Type', 'Description', 'Price']
        