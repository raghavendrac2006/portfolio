from rest_framework import viewsets
from .models import Project, ContactMessage
from .serializers import ProjectSerializer, ContactMessageSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    # This allows anyone to GET the list of projects
    queryset = Project.objects.all().order_by('-id')
    serializer_class = ProjectSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    # This allows people to POST a new contact message
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
