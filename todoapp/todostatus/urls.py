from rest_framework import routers
from .api import TodoViewSet

router = routers.DefaultRouter()
router.register('api/todostatus', TodoViewSet, 'todostatus')

urlpatterns = router.urls
