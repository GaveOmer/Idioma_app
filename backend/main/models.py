from django.db import models

class Text(models.Model):
  title = models.CharField(max_length=255)
  body = models.TextField()
  description = models.CharField(max_length=255)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  class Meta:
    verbose_name = 'text'
    verbose_name_plural = 'texts'
  def __str__(self):
    return self.title
  
  
