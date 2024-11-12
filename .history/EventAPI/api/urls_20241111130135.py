from django.urls import path
from .views import sample_view,hello_view,VenueView

urlpatterns = [
    path('sample/', sample_view, name='sample'),
    path('venues/', VenueView.as_view(), name='venues'),
]