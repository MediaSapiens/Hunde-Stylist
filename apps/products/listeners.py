from satchless.product.signals import variant_formclass_for_product
from satchless.product.forms import NonConfigurableVariantForm

from . import forms
from . import models

def get_collarsvariant_formclass(sender, instance, formclass, **kwargs):
    formclass.append(forms.CollarsVariantForm)

def get_collarswithleashvariant_formclass(sender, instance, formclass, **kwargs):
    formclass.append(forms.CollarsWithLeashVariantForm)

def get_raincoatvariant_formclass(sender, instance, formclass, **kwargs):
    formclass.append(forms.RaincoatVariantForm)


#def get_hatvariant_formclass(sender, instance, formclass, **kwargs):
#    formclass.append(NonConfigurableVariantForm)

def get_transportbagvariant_formclass(sender, instance, formclass, **kwargs):
    formclass.append(forms.TransportBagVariantForm)

def get_harnessvariant_formclass(sender, instance, formclass, **kwargs):
    formclass.append(forms.HarnessVariantForm)

def get_clothingvariant_formclass(sender, instance, formclass, **kwargs):
    formclass.append(forms.ClothingVariantForm)

def get_scarvesvariant_formclass(sender, instance, formclass, **kwargs):
    formclass.append(forms.ScarvesVariantForm)

def get_bedsvariant_formclass(sender, instance, formclass, **kwargs):
    formclass.append(forms.BedsVariantForm)



def start_listening():
    variant_formclass_for_product.connect(get_collarsvariant_formclass,
                                          sender=models.Collars)
    variant_formclass_for_product.connect(get_collarswithleashvariant_formclass,
                                          sender=models.CollarsWithLeash)
    variant_formclass_for_product.connect(get_raincoatvariant_formclass,
                                          sender=models.Raincoat)
    variant_formclass_for_product.connect(get_transportbagvariant_formclass,
                                          sender=models.TransportBag)
    variant_formclass_for_product.connect(get_harnessvariant_formclass,
                                          sender=models.Harness)
    variant_formclass_for_product.connect(get_clothingvariant_formclass,
                                          sender=models.Clothing)
    variant_formclass_for_product.connect(get_scarvesvariant_formclass,
                                          sender=models.Scarves)
    variant_formclass_for_product.connect(get_bedsvariant_formclass,
                                          sender=models.Beds)
