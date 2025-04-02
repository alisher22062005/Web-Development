import os
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hh_back/settings.py')

# import django
# django.setup()

# import json
# from api.models import Vacancy

# with open('api/company.json',encoding='utf-8-sig') as f:
#     products_data = json.load(f)

# products_items = [Vacancy(**c) for c in products_data]
# Vacancy.objects.bulk_create(products_items)


# from pathlib import Path
# import json
# from api.models import Vacancy

# # Define the path to your JSON file
# json_path = Path("api/vacancy.json")

# # Read and parse the JSON data
# products_data = json.loads(json_path.read_text(encoding="utf-8-sig"))

# # Create model instances and bulk create them
# products_items = [Vacancy(**c) for c in products_data]
# Vacancy.objects.bulk_create(products_items)

# # Incorrect (using Vacancy instead of Vacancy)
# vacancies = [Vacancy(**item) for item in products_data]

from pathlib import Path
import json

from api.models import Vacancy, Company

# Define the path to your JSON file
json_path = Path("api/vacancy.json")

# Read and parse the JSON data
products_data = json.loads(json_path.read_text(encoding="utf-8-sig"))

vacancies = []
for item in products_data:
    # Extract the company id from the JSON and get the corresponding Company instance
    company_id = item.pop("company")
    company_instance = Company.objects.get(pk=company_id)
    
    # Create a Vacancy instance with the Company instance
    vacancy = Vacancy(company=company_instance, **item)
    vacancies.append(vacancy)

# Bulk create Vacancy instances
Vacancy.objects.bulk_create(vacancies)

