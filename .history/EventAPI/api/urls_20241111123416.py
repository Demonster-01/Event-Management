
from django.urls import path
from .views import sample_view,hello_view

urlpatterns = [
    path('sample/', sample_view, name='sample'),
    # path('hello/', hello_view, name='hello'),
    path('hello/', hello_view.as_view()),
]
