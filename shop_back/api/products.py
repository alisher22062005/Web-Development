# import os
# import django
# import json

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
# django.setup()

# from api.models import Product

# with open('api/products.json') as f:
#     products_data = json.load(f)

# products_items = [Product(**p) for p in products_data]

# Product.objects.bulk_create(products_items)

import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
import django
django.setup()

import json
from api.models import Product

with open('api/products.json',encoding='utf-8-sig') as f:
    products_data = json.load(f)

products_items = [Product(**c) for c in products_data]
Product.objects.bulk_create(products_items)
