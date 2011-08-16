from django.conf import settings
from django.conf.urls.defaults import patterns, include, url

from core.admin import gulliver_admin
import satchless.cart.views
from satchless.category.app import product_app
import core.views

from localeurl.models import patch_reverse
patch_reverse()


urlpatterns = patterns('',
    url(r'^$', core.views.home_page, name='home-page'),
    url(r'^thankyou/(?P<order_token>\w+)/$', core.views.thank_you_page, name='thank-you'),
    url(r'^payment/failed/(?P<order_token>\w+)/$', core.views.payment_failed, name='payment-failed'),
    url(r'^products/', include(product_app.urls)),
    url(r'^contact/', include('satchless.contact.urls')),
    url(r'^image/', include('satchless.image.urls')),
    url(r'^cart/view/(?P<typ>(satchless_cart|satchless_wishlist))/$',
         satchless.cart.views.cart, name='satchless-cart-view'),
    url(r'^cart/', include('satchless.cart.urls')),
    url(r'^carts/', include('carts.urls')),
    url(r'^order/', include('satchless.order.urls')),
    url(r'^checkout/', include('satchless.contrib.checkout.multistep.urls')),
    url(r'^product-set/', include('satchless.contrib.productset.urls')),
    url(r'^sale/', include('sale.urls')),
    url(r'^localeurl/', include('localeurl.urls')),
    url(r'^payment-gateways/django-payments/', include('payments.urls')),

    url(r'^search/', include('satchless.contrib.search.haystack_predictive.urls')),
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^admin/', include(gulliver_admin.urls)),
)

if settings.DEBUG:
    urlpatterns += patterns("django.views",
        url(r"%s(?P<path>.*)$" % settings.STATIC_URL[1:], "static.serve", {
            "document_root": settings.STATIC_ROOT,
            'show_indexes': True,
        }),
        url(r"%s(?P<path>.*)$" % settings.MEDIA_URL[1:], "static.serve", {
            "document_root": settings.MEDIA_ROOT,
            'show_indexes': True,
        }),
    )

