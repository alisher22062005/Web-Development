from django.shortcuts import render
from django.http import JsonResponse
from api.models import Company, Vacancy


# Create your views here.

def all_companies(request):
    companies=list(Company.objects.values())
    return JsonResponse ({'companies':companies})

def company_id(request, id):
    company_by_id=list(Company.objects.filter(id=id).values())

    return JsonResponse({'company':company_by_id})

def company_id_vacancy(request,id):
    company_by_id_vacancy=list(Vacancy.objects.filter(company=id).values())

    return JsonResponse({'vacancies':company_by_id_vacancy})

def all_vacancies(reques):
    vacancies=list(Vacancy.objects.values())
    return JsonResponse({'all_vacancies':vacancies})

def vacancy_id(reques,id):
    vacancy_by_id=list(Vacancy.objects.filter(pk=id).values())

    return JsonResponse({'vacancy_by_id':vacancy_by_id})

def top_ten(request):
     vacancies = Vacancy.objects.order_by('-salary')[:10]
    # Convert the queryset to a list of dictionaries
     vacancies_data = list(vacancies.values())

     return JsonResponse({'top_ten_salaries':vacancies_data})
