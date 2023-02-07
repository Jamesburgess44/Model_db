from django.db import models

# Create your models here.
# state, age, 
class Post(models.Model):
    first_name = models.CharField(max_length=25, default="none")
    last_name = models.CharField(max_length=25, default="none")
    city = models.CharField(max_length=50, default="none")
    instagram_link = models.CharField(max_length=500, default="none")
    notes = models.TextField(max_length=900, default="none")
    age = models.IntegerField(default=0)
    gender = models.CharField(max_length=100, default="none")
    ethnicity = models.CharField(max_length=25, default="none")
    image = models.ImageField(upload_to='post_images')
    
    def __str__(self):
        return self.title