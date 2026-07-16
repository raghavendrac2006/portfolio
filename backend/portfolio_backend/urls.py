from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # This line sends any URL starting with 'api/' to our new api/urls.py file
    path('api/', include('api.urls')),
]
