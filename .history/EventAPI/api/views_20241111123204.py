# views.py in your app
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework import generics, status
from .models import Venue,Service

@api_view(['GET'])
def sample_view(request):
    data = {"message": "Hello from Django"}
    return Response(data)



@api_view(['GET'])
def hello_view(request):
    return Response({"message": "Hello from Django!"})