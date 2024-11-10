# urls.py in your app (e.g., api)
from django.urls import path
from .views import sample_view

urlpatterns = [
    path('sample/', sample_view, name='sample')
]
