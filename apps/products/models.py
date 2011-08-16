# -*- coding:utf-8 -*-
import os

from django.conf import settings
from django.db import models
from django.utils.translation import ugettext as _
from localeurl.models import reverse
from mothertongue.models import MothertongueModelTranslate
from satchless.image.models import Image
import satchless.product.models
from settings import (COLLARS_SIZE_CHOICES, COLLARS_LEASH_SIZE_CHOICES,
                     RAINCOAT_SIZE_CHOICES, TRANSPORT_BAGS_SIZE_CHOICES, 
                     HARNESS_SIZE_CHOICES, CLOTHING_SIZE_CHOICES, 
                     SCARVES_SIZE_CHOICES, BEDS_SIZE_CHOICES)
class ProductImage(Image):
    product = models.ForeignKey(satchless.product.models.Product, related_name="images")
    caption = models.CharField(_("Caption"), max_length=128, blank=True)
    order = models.PositiveIntegerField(blank=True)

    class Meta:
        ordering = ('order',)

    def __unicode__(self):
        return os.path.basename(self.image.name)

    def save(self, *args, **kwargs):
        if self.order is None:
            self.order = self.product.images.aggregate(max_order=models.Max("order"))['max_order'] or 0
        return super(ProductImage, self).save(*args, **kwargs)


class Product(MothertongueModelTranslate, satchless.product.models.ProductAbstract):
    main_image = models.ForeignKey(ProductImage, null=True, blank=True, on_delete=models.SET_NULL,
            help_text=_("Main product image (first image by default)"))
    translated_fields = ('name', 'description', 'meta_description')
    translation_set = 'translations'

    class Meta:
        abstract = True


class ProductTranslation(models.Model):
    language = models.CharField(max_length=5, choices=settings.LANGUAGES[1:])
    name = models.CharField(_('name'), max_length=128)
    description = models.TextField(_('description'), blank=True)
    meta_description = models.TextField(_('meta description'), blank=True,
            help_text=_("Description used by search and indexing engines"))

    class Meta:
        abstract = True

    def __unicode__(self):
        return "%s@%s" % (self.name, self.language)


class ColoredVariant(satchless.product.models.Variant):
    COLOR_CHOICES = (('red', _("Red")), ('green', _("Green")), ('blue', _("Blue")))
    color = models.CharField(max_length=32, choices=COLOR_CHOICES)
    class Meta:
        abstract = True


class Collars(Product):
    class Meta:
        verbose_name = _('Collars')
        verbose_name_plural = _('Collars')


class CollarsTranslation(ProductTranslation):
    product = models.ForeignKey(Collars, related_name='translation')


class CollarsVariant(ColoredVariant):
    product = models.ForeignKey(Collars, related_name='variants')
    SIZE_CHOICES = COLLARS_SIZE_CHOICES
    size = models.CharField(choices=SIZE_CHOICES, max_length=2)

    def __unicode__(self):
        return '%s (%s / %s)' % (self.product, self.get_color_display(), self.get_size_display())


class CollarsWithLeash(Product):
    class Meta:
        verbose_name = _('Collars with Leash')
        verbose_name_plural = _('Collars with Leash')


class CollarsWithLeashTranslation(ProductTranslation):
    product = models.ForeignKey(CollarsWithLeash, related_name='translations')


class CollarsWithLeashVariant(ColoredVariant):
    product = models.ForeignKey(CollarsWithLeash, related_name='variants')
    SIZE_CHOICES = COLLARS_LEASH_SIZE_CHOICES
    size = models.CharField(choices=SIZE_CHOICES, max_length=2)

    def __unicode__(self):
        return '%s (%s / %s)' % (unicode(self.product), self.get_color_display(),
                                 self.get_size_display())


class Raincoat(Product):
    class Meta:
        verbose_name = _('Raincoat')
        verbose_name_plural = _('Raincoat')


class RaincoatTranslation(ProductTranslation):
    product = models.ForeignKey(Raincoat, related_name='translations')


class RaincoatVariant(satchless.product.models.Variant):
    product = models.ForeignKey(Raincoat, related_name='variants')
    SIZE_CHOICES = RAINCOAT_SIZE_CHOICES
    size = models.CharField(choices=SIZE_CHOICES, max_length=2)

    def __unicode__(self):
        return unicode(self.product)


class TransportBag(Product):
    class Meta:
        verbose_name = _('Transport Bag')
        verbose_name_plural = _('Transport Bags')


class TransportBagTranslation(ProductTranslation):
    product = models.ForeignKey(TransportBag, related_name='translations')


class TransportBagVariant(ColoredVariant):
    product = models.ForeignKey(TransportBag, related_name='variants')
    SIZE_CHOICES = TRANSPORT_BAGS_SIZE_CHOICES
    size = models.CharField(choices=SIZE_CHOICES, max_length=2)

    def __unicode__(self):
        return '%s (%s / %s)' % (unicode(self.product), self.get_color_display(),
                                 self.get_size_display())


class Harness(Product):
    class Meta:
        verbose_name = _('Dogs Harness')
        verbose_name_plural = _('Dogs Harness')


class HarnessTranslation(ProductTranslation):
    product = models.ForeignKey(Harness, related_name='translations')


class HarnessVariant(ColoredVariant):
    product = models.ForeignKey(Harness, related_name='variants')
    SIZE_CHOICES = HARNESS_SIZE_CHOICES
    size = models.CharField(choices=SIZE_CHOICES, max_length=2)

    def __unicode__(self):
        return '%s (%s / %s)' % (unicode(self.product), self.get_color_display(),
                                 self.get_size_display())


class Clothing(Product):
    class Meta:
        verbose_name = _('Clothing')
        verbose_name_plural = _('Clothing')


class ClothingTranslation(ProductTranslation):
    product = models.ForeignKey(Clothing, related_name='translations')


class ClothingVariant(ColoredVariant):
    product = models.ForeignKey(Clothing, related_name='variants')
    SIZE_CHOICES = CLOTHING_SIZE_CHOICES
    size = models.CharField(choices=SIZE_CHOICES, max_length=2)

    def __unicode__(self):
        return '<em>%s / %s / %s</em>' % (self.product, self.get_color_display(), self.get_size_display())


class Scarves(Product):
    class Meta:
        verbose_name = _('Scarves')
        verbose_name_plural = _('Scarves')


class ScarvesTranslation(ProductTranslation):
    product = models.ForeignKey(Scarves, related_name='translations')


class ScarvesVariant(ColoredVariant):
    product = models.ForeignKey(Scarves, related_name='variants')
    SIZE_CHOICES = SCARVES_SIZE_CHOICES
    size = models.CharField(choices=SIZE_CHOICES, max_length=2)

    def __unicode__(self):
        return '%s / %s' % (self.get_color_display(), self.get_size_display())


class Beds(Product):
    class Meta:
        verbose_name = _('Beds')
        verbose_name_plural = _('Beds')


class BedsTranslation(ProductTranslation):
    product = models.ForeignKey(Beds, related_name='translations')


class BedsVariant(ColoredVariant):
    product = models.ForeignKey(Beds, related_name='variants')
    

    def __unicode__(self):
        return '%s' % (self.get_color_display())



def assign_main_image(sender, instance, **kwargs):
    if not kwargs.get('raw', False) and instance.product.main_image == None \
            and instance.product.images.exists():
        instance.product.main_image = instance.product.images.all()[0]
        instance.product.save()
models.signals.post_save.connect(assign_main_image, sender=ProductImage)

def assign_new_main_image(sender, instance, **kwargs):
    try:
        if instance.product.main_image == instance and instance.product.images.exists():
            instance.product.main_image = instance.product.images.all()[0]
            instance.product.save()
    except Product.DoesNotExist:
        pass
models.signals.post_delete.connect(assign_new_main_image, sender=ProductImage)

#def _create_empty_hat_variant(sender, instance, created, **kwargs):
#    if not kwargs.get('raw', False) and created:
#        instance.variants.create()
#models.signals.post_save.connect(_create_empty_hat_variant, sender=Hat)
