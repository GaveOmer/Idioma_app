from django.db import models


class Category(models.Model):
  name = models.CharField(max_length=255)
  slug = models.SlugField(max_length=255, unique=True, null=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  class Meta:
    verbose_name = 'category'
    verbose_name_plural = 'categories'
  def __str__(self):
    return self.title

class Text(models.Model):
  text_id = models.PositiveBigIntegerField(primary_key=True, db_column='text_id')
  title = models.CharField(max_length=255)
  category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='texts')
  slug = models.SlugField(max_length=255)
  body = models.TextField()
  description = models.CharField(max_length=255, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  class Meta:
    verbose_name = 'text'
    verbose_name_plural = 'texts'
  def __str__(self):
    return self.title
  
  
