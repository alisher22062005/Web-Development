
from pathlib import Path
import json
from api.models import Company

# Define the path to your JSON file
json_path = Path("api/company.json")

# Read and parse the JSON data
products_data = json.loads(json_path.read_text(encoding="utf-8-sig"))

# Create model instances and bulk create them
products_items = [Company(**c) for c in products_data]
Company.objects.bulk_create(products_items)