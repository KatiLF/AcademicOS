from django.contrib import admin

# Register your models here.
from .models import Permission, User, Profile
admin.site.register(Permission)
admin.site.register(User)
admin.site.register(Profile)
