from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ContactMessageViewSet

# A Router automatically creates the standard URLs for our views
router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
