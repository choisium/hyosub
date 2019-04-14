from django.urls import path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('sentences', views.SentenceViewSet)

urlpatterns = [
    path('', views.home, name='home'),
    path('api/', include(router.urls)),
]