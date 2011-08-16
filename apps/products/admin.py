# -*- coding:utf-8 -*-
from django.conf import settings
from django.contrib import admin
import django.db.models
from django.db.models.query import EmptyQuerySet

import satchless.category.admin
import satchless.contrib.pricing.simpleqty.admin
import satchless.product.models
import satchless.product.admin
import sale.models

from . import models
from . import widgets

class TranslationInline(admin.StackedInline):
    extra = 1
    max_num = len(settings.LANGUAGES) - 1


class ImageInline(admin.TabularInline):
    formfield_overrides = {
        django.db.models.ImageField: { 'widget': widgets.AdminImageWidget },
    }


class ProductForm(satchless.category.admin.ProductForm):
    def __init__(self, *args, **kwargs):
        super(ProductForm, self).__init__(*args, **kwargs)
        if self.instance.id:
            self.fields['main_image'].queryset = (models.ProductImage.objects
                                                        .filter(product=self.instance))
        else:
            self.fields['main_image'].queryset = EmptyQuerySet(model=models.ProductImage)


class ProductAdmin(satchless.category.admin.ProductAdmin):
    form = ProductForm


class ProductImageInline(ImageInline):
    extra = 4
    max_num = 4
    model = models.ProductImage
    sortable_field_name = "order"


class PriceInline(admin.TabularInline):
    model = satchless.contrib.pricing.simpleqty.models.ProductPrice
    form = satchless.contrib.pricing.simpleqty.admin.ProductPriceForm


class DiscountInline(admin.TabularInline):
    model = sale.models.DiscountGroup.products.through
    max_num = 1


class CollarsVariantInline(admin.TabularInline):
    model = models.CollarsVariant


class CollarsTranslationInline(TranslationInline):
    model = models.CollarsTranslation


class CollarsAdmin(ProductAdmin):
    inlines = [CollarsTranslationInline, CollarsVariantInline, ProductImageInline]


class CollarsWithLeashVariantInline(admin.TabularInline):
    model = models.CollarsWithLeashVariant


class CollarsWithLeashTranslationInline(TranslationInline):
    model = models.CollarsWithLeashTranslation


class CollarsWithLeashAdmin(ProductAdmin):
    inlines = [CollarsWithLeashTranslationInline, CollarsWithLeashVariantInline, PriceInline,
               DiscountInline, ProductImageInline]


class RaincoatTranslationInline(TranslationInline):
    model = models.RaincoatTranslation


class RaincoatAdmin(ProductAdmin):
    inlines = [RaincoatTranslationInline, PriceInline, DiscountInline,
               ProductImageInline]


class TransportBagVariantInline(admin.TabularInline):
    model = models.TransportBagVariant


class TransportBagTranslationInline(TranslationInline):
    model = models.TransportBagTranslation


class TransportBagAdmin(ProductAdmin):
    inlines = [TransportBagTranslationInline, PriceInline, DiscountInline,
               TransportBagVariantInline, ProductImageInline]


class HarnessVariantInline(admin.TabularInline):
    model = models.HarnessVariant


class HarnessTranslationInline(TranslationInline):
    model = models.HarnessTranslation


class HarnessAdmin(ProductAdmin):
    inlines = [HarnessTranslationInline, HarnessVariantInline,
               PriceInline, DiscountInline, ProductImageInline]


class ClothingVariantInline(admin.TabularInline):
    model = models.ClothingVariant


class ClothingTranslationInline(TranslationInline):
    model = models.ClothingTranslation


class ClothingAdmin(ProductAdmin):
    inlines = [ClothingTranslationInline, ClothingVariantInline,
               PriceInline, DiscountInline, ProductImageInline]


class ScarvesVariantInline(admin.TabularInline):
    model = models.ScarvesVariant


class ScarvesTranslationInline(TranslationInline):
    model = models.ScarvesTranslation


class ScarvesAdmin(ProductAdmin):
    inlines = [ScarvesTranslationInline, ScarvesVariantInline,
               PriceInline, DiscountInline, ProductImageInline]

class BedsVariantInline(admin.TabularInline):
    model = models.ScarvesVariant


class BedsTranslationInline(TranslationInline):
    model = models.BedsTranslation


class BedsAdmin(ProductAdmin):
    inlines = [BedsTranslationInline, BedsVariantInline,
               PriceInline, DiscountInline, ProductImageInline]



admin.site.register(models.Collars, CollarsAdmin)
admin.site.register(models.CollarsWithLeash, CollarsWithLeashAdmin)
admin.site.register(models.Raincoat, RaincoatAdmin)
admin.site.register(models.TransportBag, TransportBagAdmin)
admin.site.register(models.Harness, HarnessAdmin)
admin.site.register(models.Clothing, ClothingAdmin)
admin.site.register(models.Scarves, ScarvesAdmin)
admin.site.register(models.Beds, BedsAdmin)

