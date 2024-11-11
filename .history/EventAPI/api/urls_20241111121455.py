
from django.urls import path
from .views import sample_viewm,hello_view

urlpatterns = [
    path('sample/', sample_view, name='sample'),
    path('hello/', hello_view, name='hello'),
]
