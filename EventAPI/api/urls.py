from django.urls import path
from .views import ( sample_view,hello_view,VenueView,
                    VenueCreateView,UpdateVenueView,ServiceView,
                    ServiceDetailView,OurWorkListView,PackageView,PackageCreateView )


from django.contrib.auth.views import LoginView
from . import views

urlpatterns = [
    path('sample/', sample_view, name='sample'),
    path('venues/', VenueView.as_view(), name='venues'),
    path('venues/create/', VenueCreateView.as_view(), name='create_venue'),
    path('venues/<int:venue_id>/', UpdateVenueView.as_view(), name='update_venue'),
    path('services/', ServiceView.as_view(), name='services'),
    path('service/<int:id>/', ServiceDetailView.as_view(), name='service-detail'),
    path('our-work/', OurWorkListView.as_view(), name='our-work-list'),
    path('package/',PackageView.as_view(),name='package'),
    path('package-create/', PackageCreateView.as_view(), name='package-create'),
    
    
]

