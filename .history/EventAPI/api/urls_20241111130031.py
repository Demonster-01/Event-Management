from django.urls import path
from .views import sample_view,hello_view,VenueView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('sample/', sample_view, name='sample'),
    path('venues/', VenueView.as_view(), name='venues'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)