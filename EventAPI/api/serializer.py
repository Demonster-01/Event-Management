# serializers.py
from rest_framework import serializers
from .models import Venue,Service,OurWork,Package,PlannerList

class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = ['id', 'Name', 'Location', 'Capacity','No_of_Halls','Area','Parking','Booking_price','Poster']

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'Name','Type', 'Description', 'Price','poster','keywords']
        
    def get_poster_url(self, obj):
        request = self.context.get('request')
        if obj.poster and request:
            return request.build_absolute_uri(obj.poster.url)
        return None
    
class OurWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurWork
        fields = ['id', 'Name', 'poster', 'created_at']
        
class PackageSerializer(serializers.ModelSerializer):
    services = serializers.PrimaryKeyRelatedField(queryset=Service.objects.all(), many=True)

    class Meta:
        model = Package
        fields = ['id', 'Name', 'Description', 'Price', 'poster', 'services']

class PlannerListSerializer(serializers.ModelSerializer):
    venue = VenueSerializer()
    service = ServiceSerializer()
    package = PackageSerializer()
    # package = serializers.PrimaryKeyRelatedField(queryset=Package.objects.all())

    class Meta:
        model = PlannerList 
        fields = ['id', 'booked_at', 'venue', 'service', 'user', 'package','session_id']
