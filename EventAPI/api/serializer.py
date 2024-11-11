# serializers.py
from rest_framework import serializers
from .models import Venue

class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = ['id', 'Name', 'Location', 'Capacity','No_of_Halls','Area','Parking','Booking_price','Poster']
