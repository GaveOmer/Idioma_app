from rest_framework.views import APIView
from ..models import Text
from .serializers import TextSerializer
from django.shortcuts import render
from rest_framework .response import Response

class TextView(APIView):
  def get(self, request):
    output = [{"title": output.title,
               "description": output.description,
               "body": output.body,
               "id": output.id}
              for output in Text.objects.all()]
    return Response(output)
  def post(self, request):
    serializer = TextSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return Response(serializer.data)