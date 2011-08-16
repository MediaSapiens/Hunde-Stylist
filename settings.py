# -*- coding:utf-8 -*-
import os
from os import path
import re, sys
from django.core.urlresolvers import reverse
from django.utils.translation import ugettext_lazy as _

PROJECT_ROOT = path.dirname(path.abspath(__file__))

sys.path.insert(0,path.join(PROJECT_ROOT, 'apps'))
sys.path.insert(0,path.join(PROJECT_ROOT, 'libs'))


DEBUG = True
TEMPLATE_DEBUG = DEBUG

ADMINS = (
    ('Vadim Chernysh', 'chernysh.vadim@gmail.com'),
)

MANAGERS = ADMINS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3', # Add 'postgresql_psycopg2', 'postgresql', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': path.join(PROJECT_ROOT, 'hs.sqlite3.db'),
        'USER': '',                      # Not used with sqlite3.
        'PASSWORD': '',                  # Not used with sqlite3.
        'HOST': '',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
    }
}

TIME_ZONE = 'America/Chicago'

LANGUAGE_CODE = 'en'
LANGUAGES = (
    ('en', u"English"),
    ('de', u"Germany"),
)

PREFIX_DEFAULT_LOCALE = True
LOCALE_INDEPENDENT_PATHS = (
    re.compile('^/admin'),
)

SITE_ID = 1
USE_I18N = True
USE_L10N = True

MEDIA_ROOT = path.join(PROJECT_ROOT, 'static/media')
MEDIA_URL = '/static/media/'
STATIC_ROOT = path.join(PROJECT_ROOT, 'static')
STATIC_URL = '/static/'
ADMIN_MEDIA_PREFIX = STATIC_URL + 'grappelli/'

STATICFILES_DIRS = (
    path.join(PROJECT_ROOT, 'webstatic'),
)


STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#    'django.contrib.staticfiles.finders.DefaultStorageFinder',
)

# Make this unique, and don't share it with anybody.
SECRET_KEY = '2%068-=k4jshp)!50hi)t1dfv(@0!dq6@_l40$ha(qf)1@oqq4'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
#     'django.template.loaders.eggs.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
)

ROOT_URLCONF = 'urls'

TEMPLATE_DIRS = (
    path.join(PROJECT_ROOT, 'templates'),
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.debug',
    'django.core.context_processors.i18n',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'django.core.context_processors.request',
    'django.contrib.messages.context_processors.messages',
    'mothertongue.context_processors.router',
    'carts.context_processors.carts_sizes',
    'core.context_processors.root_categories',
)

FIXTURE_DIRS = (
    path.join(PROJECT_ROOT, 'fixtures'),
)

INSTALLED_APPS = (
    'localeurl',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',

    'mothertongue',
    'categories',
    'grappelli',
    'mptt',
    'products',
    'south',
    'pagination',
    'core',
    'carts',
    'sale',
    'haystack',
    'satchless.product',
    'satchless.category',
    'satchless.image',
    'satchless.contrib.productset',
    #'satchless.contact',
    'satchless.cart',
    'satchless.pricing',
    'satchless.contrib.pricing.simpleqty',
    'satchless.contrib.tax.flatgroups',
    #'satchless.contrib.stock.singlestore',
    'satchless.order',
    'satchless.contrib.checkout.multistep',
    'satchless.delivery',
    'satchless.contrib.delivery.simplepost',
    'satchless.payment',
    'satchless.contrib.search.haystack_predictive',
    'payments',
    'payments.dummy',
    'satchless.contrib.payment.django_payments_provider',
)

# A sample logging configuration. The only tangible logging
# performed by this configuration is to send an email to
# the site admins on every HTTP 500 error.
# See http://docs.djangoproject.com/en/dev/topics/logging for
# more details on how to customize your logging configuration.
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}



SATCHLESS_IMAGE_SIZES = {
    'admin': {
        'size': (100, 100),
        'crop': True,
    },
    'admin-icon': {
        'size': (22, 22),
        'crop': True,
    },
    'category': {
        'size': (230, 257),
        'crop': True,
    },
    'category-product': {
        'size': (230, 307),
        'crop': True,
    },
    'product-detail': {
        'size': (304, 304),
        'crop': False,
    },
    'product-thumb': {
        'size': (68, 68),
        'crop': True,
    },
    'cart-product': {
        'size': ('156', '156'),
        'crop': False,
    },
    'order-preview': {
        'size': ('56', '56'),
        'crop': True,
    },
}

SATCHLESS_DEFAULT_CURRENCY = 'EUR'

INTERNAL_IPS = ['127.0.0.1']

import satchless.contrib.pricing.cache

def get_cache_key(*args, **kwargs):
    key = satchless.contrib.pricing.cache.get_cache_key(*args, **kwargs)
    key['discount'] = bool(kwargs.get('discount', True))
    return key
price_cache = satchless.contrib.pricing.cache.CacheFactory(get_cache_key)

SATCHLESS_PRICING_HANDLERS = [
    price_cache.getter,
    'satchless.contrib.pricing.simpleqty.SimpleQtyPricingHandler',
    'satchless.contrib.tax.flatgroups.FlatGroupPricingHandler',
    'sale.SalePricingHandler',
    price_cache.setter,
]
SATCHLESS_PRODUCT_VIEW_HANDLERS = [
    'satchless.cart.add_to_cart_handler',
]

#SATCHLESS_PRODUCT_VIEW_HANDLERS = [
#    'carts.handler.carts_handler',
#]
SATCHLESS_ORDER_PARTITIONERS = [
    'satchless.contrib.order.partitioner.simple',
]
SATCHLESS_DELIVERY_PROVIDERS = [
    'satchless.contrib.delivery.simplepost.PostDeliveryProvider',
]
SATCHLESS_PAYMENT_PROVIDERS = [
    'satchless.contrib.payment.django_payments_provider.DjangoPaymentsProvider',
]
SATCHLESS_DJANGO_PAYMENT_TYPES = (('dummy', _('Dummy Payment Provider')),)

PAYMENT_VARIANTS = {
    'dummy': ('payments.dummy.DummyProvider', {
              'url': lambda payment: reverse('thank-you',
                                             args=(payment.satchless_payment_variant.order.token,))
    })
}

HAYSTACK_SITECONF = 'search_sites'
HAYSTACK_SEARCH_ENGINE = 'whoosh'
HAYSTACK_WHOOSH_PATH = os.path.join(PROJECT_ROOT, 'whoosh_index')

INTERNAL_IPS = ['127.0.0.1']

try:
    execfile(os.path.join(PROJECT_ROOT, 'shop_settings.py'))
except IOError:
    pass

try:
    execfile(os.path.join(PROJECT_ROOT, 'local_settings.py'))
except IOError:
    pass

#import pdb
#pdb.set_trace()
