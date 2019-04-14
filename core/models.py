from django.db import models

# Create your models here.
class Sentence(models.Model):
    name = models.CharField(max_length=20)
    sentence = models.CharField(max_length=300)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.sentence + " - " + self.name