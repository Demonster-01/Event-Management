# views.py in your app
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.views import APIView
from rest_framework import generics, status
from .models import Venue,Service

@api_view(['GET'])
def sample_view(request):
    data = {"message": "Hello from Django"}
    return Response(data)



class hello_view(APIView):
    def get(self,request,Format=None):
        return Response({"message": "Hello from Django!"})