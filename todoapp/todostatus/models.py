from django.db import models


class Todostatus(models.Model):
    todoid = models.CharField(primary_key = True, max_length = 200, unique=True)
    delete = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(auto_now_add=True)
    # def __str__(self):
    #     return todoid

    # def __unicode__(self):
    #     return 

