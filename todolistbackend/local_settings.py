from settings import PROJECT_ROOT, SITE_ROOT
import os

DEBUG = True
TEMPLATE_DEBUG = True

DATABASES = {
    "default": {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'dehhfm1bis1ckh',
        'USER': 'rbthkngtcrhzng',
        'PASSWORD': 'ca4a968b29cfb4810f7906093e4055b1dd9006020fe8896f70ff01ebefdb9d81',
        'HOST': 'ec2-54-86-106-48.compute-1.amazonaws.com',
        'PORT': '5432'
    }
}