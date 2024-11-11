from django.urls import path
from .views import sample_view,hello_view,VenueView,VenueCreateView,UpdateVenueView

urlpatterns = [
    path('sample/', sample_view, name='sample'),
    path('venues/', VenueView.as_view(), name='venues'),
    path('venues/create/', VenueCreateView.as_view(), name='create_venue'),
    path('venues/<int:venue_id>/', UpdateVenueView.as_view(), name='update_venue'),
]
