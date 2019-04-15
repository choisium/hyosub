from django.db import models

# Create your models here.
class Sentence(models.Model):
    name = models.CharField(max_length=20)
    sentence = models.CharField(max_length=300)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.sentence + " - " + self.name

class Panel(models.Model):
    image = models.ImageField()
    date = models.DateTimeField()
    description = models.CharField(max_length=300)
    like = models.IntegerField(default=0)

    def __str__(self):
        return str(self.date)

class Comment(models.Model):
    panel = models.ForeignKey(Panel, related_name='comments', on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    comment = models.CharField(max_length=300)
    last_modified = models.DateTimeField(auto_now=True)
    like = models.IntegerField(default=0)

    def __str__(self):
        return self.comment + " - " + self.name