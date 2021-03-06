from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseForbidden, JsonResponse, Http404
from rest_framework import generics, permissions, viewsets, mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *


def home(request):
    return render(request, 'core/home.html', {})


class SentenceViewSet(viewsets.ModelViewSet):
    queryset = Sentence.objects.all()
    serializer_class = SentenceSerializer

    def list(self, request):
        queryset = Sentence.objects.all().order_by('-last_modified')
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save()

class PanelViewSet(viewsets.ModelViewSet):
    queryset = Panel.objects.all()
    serializer_class = PanelSerializer

    def list(self, request):
        queryset = Panel.objects.all().order_by('date')
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        panel = Panel.objects.filter(pk=pk).first()
        serializer = self.serializer_class(panel)
        return Response(serializer.data)

class CommentViewSiet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def retrieve(self, request, pk=None):
        queryset = Comment.objects.filter(panel=pk)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        # panel = Panel.objects.filter(pk=self.request.data['pk'])
        serializer.save()