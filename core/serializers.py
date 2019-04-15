from django.utils import timezone
from rest_framework import serializers
from .models import *


class SentenceSerializer(serializers.ModelSerializer):
	class Meta:
		model = Sentence
		fields = ('name', 'sentence', 'last_modified')

class PanelSerializer(serializers.ModelSerializer):
	class Meta:
		model = Panel
		fields = ('image', 'date', 'description', 'like', 'comments', 'pk')

class CommentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Comment
		fields = ('panel', 'name', 'comment', 'last_modified', 'like')