# views.py in your app
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.views import APIView
from rest_framework import generics, status
from .models import Venue,Service,OurWork
from .serializer import VenueSerializer, ServiceSerializer ,OurWorkSerializer


@api_view(['GET'])
def sample_view(request):
    data = {"message": "Hello from Django"}
    return Response(data)



class hello_view(APIView):
    def get(self,request,Format=None):
        return Response({"message": "Hello from Django!"})
    
class VenueView(APIView):
    def get(self, request, format=None):
        venues = Venue.objects.all()  # Fetch all Venue records
        serializer = VenueSerializer(venues, many=True)  # Serialize the data
        return Response(serializer.data)  # Return the data as a JSON response
    
class VenueCreateView(APIView):
    def post(self,request,format=None):
        serializer = VenueSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
class UpdateVenueView(APIView):
    
    def get(self, request, venue_id, format=None):
        try:
            venue = Venue.objects.get(id=venue_id)
        except Venue.DoesNotExist:
            return Response({"error": "Venue not found"}, status=status.HTTP_404_NOT_FOUND)
        
        # Serialize the venue data and return it
        serializer = VenueSerializer(venue)
        return Response(serializer.data)

    def put(self, request, venue_id, format=None):
        try:
            venue = Venue.objects.get(id=venue_id)
        except Venue.DoesNotExist:
            return Response({"error": "Venue not found"}, status=status.HTTP_404_NOT_FOUND)
        
        # Deserialize and update the venue data
        serializer = VenueSerializer(venue, data=request.data, partial=True)  # partial=True to allow updating only some fields
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class ServiceView(APIView):
    def get(self, request, format=None):
        services = Service.objects.all()  # Fetch all Venue records
        serializer = ServiceSerializer(services, many=True)  # Serialize the data
        return Response(serializer.data)  # Return the data as a JSON response
    
class ServiceDetailView(APIView):
    def get(self,request,id,format=None):
        try:
            service=Service.objects.get(id=id)
            serializer = ServiceSerializer(service)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Service.DoesNotExist:
            return Response({"error": "Service not found"}, status=status.HTTP_404_NOT_FOUND)
        
class OurWorkListView(APIView):
    def get(self, request):
        our_work = OurWork.objects.all()
        serializer = OurWorkSerializer(our_work, many=True)
        return Response(serializer.data)