from django.utils import timezone
from rest_framework import serializers
from .models import *


class SentenceSerializer(serializers.ModelSerializer):
	class Meta:
		model = Sentence
		fields = ('name', 'sentence', 'last_modified')