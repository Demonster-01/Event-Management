# views.py in your app
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.views import APIView
from rest_framework import generics, status
from .models import Venue,Service,OurWork,Package,PlannerList
from .serializer import VenueSerializer, ServiceSerializer ,OurWorkSerializer, PackageSerializer,PlannerListSerializer
   
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.contrib.sessions.models import Session



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
    
class PackageView(APIView):
    def get(self,request,format=None):
        packages = Package.objects.all()
        serializer = PackageSerializer(packages, many=True)
        return Response(serializer.data)
    

class PackageCreateView(APIView):
    parser_classes = [MultiPartParser, FormParser]  # To handle file uploads

    def post(self, request, *args, **kwargs):
        serializer = PackageSerializer(data=request.data)
        
        if serializer.is_valid():
            # Save the package instance
            package = serializer.save()

            # Add services to the package (ManyToMany field)
            service_ids = request.data.getlist('services[]')
            services = Service.objects.filter(id__in=service_ids)
            package.services.set(services)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def get(self,request,format=None):
        planners = PlannerList.objects.all()
        serializer=PlannerListSerializer(planners,many=True)
        return Response(serializer.data)
    
    
from django.contrib.auth import authenticate, login as auth_login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class loginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            profile = user.profile  # Assuming you have a one-to-one relationship between User and Profile
            if profile.is_approved.lower() == 'true':
                auth_login(request, user)
                return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Your account is not approved yet."}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

    
import uuid
    
# class AddToPlannerView(APIView):
#     def post(self, request):
#         item_type = request.data.get('item_type')
#         item_id = request.data.get('item_id')
#         user = request.user if request.user.is_authenticated else None
#         session_id = request.data.get('session_id', str(uuid.uuid4()))  # Generate a new session ID for anonymous users

#         if not item_type or not item_id:
#             return Response({"message": "Item type and item ID are required"}, status=400)

#         item = None
#         if item_type == 'venue':
#             item = Venue.objects.filter(id=item_id).first()
#         elif item_type == 'service':
#             item = Service.objects.filter(id=item_id).first()
#         elif item_type == 'package':
#             item = Package.objects.filter(id=item_id).first()
#         else:
#             return Response({"message": "Invalid item type"}, status=400)

#         if not item:
#             return Response({"message": f"{item_type.capitalize()} with the given ID not found"}, status=404)

#         # Create a PlannerList entry
#         planner_item = PlannerList(
#             venue=item if isinstance(item, Venue) else None,
#             service=item if isinstance(item, Service) else None,
#             package=item if isinstance(item, Package) else None,
#             user=user,
#             session_id=session_id
#         )
#         planner_item.save()

#         return Response({"message": f"{item_type.capitalize()} added to your planner"}, status=201)



# class PlannerListView(APIView):
#     def get(self,request,format=None):
#         planners = PlannerList.objects.all()
#         serializer=PlannerListSerializer(planners,many=True)
#         return Response(serializer.data)




class PlannerListView(APIView):
    """
    View to list all planners, including venues, services, and packages.
    """
    def get(self, request, format=None):
        # Filter planner list based on logged-in user or session ID
        user = request.user if request.user.is_authenticated else None
        session_id = request.GET.get("session_id")

        if user:
            planners = PlannerList.objects.filter(user=user)
        elif session_id:
            planners = PlannerList.objects.filter(session_id=session_id)
        else:
            planners = PlannerList.objects.none()

        # Serialize planner list
        serializer = PlannerListSerializer(planners, many=True)
        return Response(serializer.data)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

class AddToPlannerView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        package_id = request.data.get("package")
        venue_id = request.data.get("venue")
        service_id = request.data.get("service")
        booked_at = request.data.get("booked_at")

        print("Received data:", package_id, venue_id, service_id)  # Debugging line

        # We expect only one of these fields to be present
        if not (package_id or venue_id or service_id):
            return Response({"error": "At least one of package, venue, or service must be provided"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            package = Package.objects.get(id=package_id) if package_id else None
            venue = Venue.objects.get(id=venue_id) if venue_id else None
            service = Service.objects.get(id=service_id) if service_id else None
        except (Package.DoesNotExist, Venue.DoesNotExist, Service.DoesNotExist) as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        # Retrieve user information if authenticated, else use session_id for anonymous user
        user = request.user if request.user.is_authenticated else None
        session_id = request.data.get('session_id') if not user else None

        # Create the planner item based on available data
        planner_item = PlannerList.objects.create(
            package=package,
            venue=venue,
            service=service,
            booked_at=booked_at,
            user=user,
            session_id=session_id
        )

        serializer = PlannerListSerializer(planner_item)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

