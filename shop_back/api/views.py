from django.shortcuts import render
from django.http import JsonResponse
from api.models import Product, Category
# Create your views here.


def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    print(products_json)
    return JsonResponse(products_json, safe=False)


def product_by_id(request, id):
    product_by_id = Product.objects.filter(pk=id).first()
    product_by_id_json = product_by_id.to_json()
    return JsonResponse(product_by_id_json, safe=False)


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def category_by_id(request, id):
    category_by_id = Category.objects.filter(pk=id).first()
    category_by_id_json = category_by_id.to_json()
    return JsonResponse(category_by_id_json, safe=False)


def products_by_category(request, id):
    category_by_id = Category.objects.filter(pk=id).first()
    products_by_cat_json = None

    if category_by_id.Name == "Smartphones":
        products_by_cat = Product.objects.filter(category_name="Smartphones")
    elif category_by_id.Name == "Mouses":
        products_by_cat = Product.objects.filter(category_name="Mouses")
    elif category_by_id.Name == "Books":
        products_by_cat = Product.objects.filter(category_name="Books")
    elif category_by_id.Name == "Headphones":
        products_by_cat = Product.objects.filter(category_name="Headphones")

    products_by_cat_json = [p.to_json() for p in products_by_cat]

    # return JsonResponse(products_by_cat_json, safe=False)
    return JsonResponse(products_by_cat_json, safe=False, json_dumps_params={'ensure_ascii': False})
