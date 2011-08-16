# -*- coding:utf-8 -*-
from django.conf.urls.defaults import *
from django.views.generic.simple import direct_to_template

from . import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='sale'),
    url(r'^(?P<category_slugs>(([a-z0-9_-]+/)*[a-z0-9_-]+))/$',
        views.index, name='sale'),
)
