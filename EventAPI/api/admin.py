from django.contrib import admin
from .models import Venue, Service, OurWork,Package,PlannerList,User
# Register your models here.
admin.site.register(Venue)
admin.site.register(Service)
admin.site.register(OurWork)
admin.site.register(Package)
admin.site.register(PlannerList)
# admin.site.register(User)