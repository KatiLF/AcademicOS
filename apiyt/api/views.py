from django.shortcuts import render
from .models import User, Profile , Permission
from rest_framework import viewsets,filters
from .serializers import UserSerializer
# Create your views here.reate/
def create(request):
    x=User(uname='Pat',password='123456',mail='pato@mail.com',rut='2222222')
    x.save()
    return render(request, 'create.html')
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    #Sistema de filtros
    filter_backends = [filters.SearchFilter]
    search_fields = ['uname']
