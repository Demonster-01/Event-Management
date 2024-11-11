# views.py in your app
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.views import APIView
from rest_framework import generics, status
from .models import Venue,Service
from .serializer import VenueSerializer


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