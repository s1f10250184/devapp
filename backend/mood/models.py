from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Mood(models.Model):
    MOOD_CHOICES = [
        ("happy", "happy"),
        ("sad", "sad"),
        ("angry", "angry"),
        ("fantastic", "fantastic"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mood = models.CharField(max_length=10, choices=MOOD_CHOICES)
    created_at = models.DateTimeField(auto_now_add = True)
    note = models.TextField()