from rest_framework import serializers
from .models import Todostatus


class TodoStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todostatus
        fields = "__all__"