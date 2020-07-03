from .models import  Todostatus
from rest_framework import viewsets, permissions
from .serializers import TodoStatusSerializer


class TodoViewSet(viewsets.ModelViewSet):
    queryset= Todostatus.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class =  TodoStatusSerializer