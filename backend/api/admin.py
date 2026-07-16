from django.contrib import admin
from .models import Project, ContactMessage

# Register your models here so they show up in the admin panel
admin.site.register(Project)
admin.site.register(ContactMessage)
