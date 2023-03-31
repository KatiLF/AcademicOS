from django.db import models
from model_utils.models import TimeStampedModel, SoftDeletableModel

def profile_default():
	return Profile.objects.get(pname='student').pk

def permission_default():

	return Permission.objects.get(permname='view').pk

class Permission(models.Model):
	description=models.CharField(max_length=500)
	permname=models.CharField(max_length=200)

class Profile(models.Model):
	pname=models.CharField(max_length=200)
	permission=models.ForeignKey(Permission,null=False,  default=permission_default, on_delete=models.SET_DEFAULT)

class User(models.Model):
	uname=models.CharField(max_length=200)
	password=models.CharField(max_length=200)
	mail=models.CharField(max_length=200)
	rut=models.CharField(max_length=11)
	profile=models.ForeignKey(Profile , null=False , blank=False, default=profile_default, on_delete=models.SET_DEFAULT)
