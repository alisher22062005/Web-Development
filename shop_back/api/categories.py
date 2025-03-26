import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
import django
django.setup()

import json
from api.models import Category

with open('api/categories.json') as f:
    categories_data = json.load(f)

categories_items = [Category(**c) for c in categories_data]
Category.objects.bulk_create(categories_items)
