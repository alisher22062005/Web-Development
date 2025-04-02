"""
URL configuration for hh_back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from api.views import all_companies,company_id ,company_id_vacancy, all_vacancies, vacancy_id, top_ten
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/',all_companies),
    path('api/companies/<int:id>',company_id),
    path('api/companies/<int:id>/vacancies',company_id_vacancy),
    path('api/vacancies',all_vacancies),
    path('api/vacancies/<int:id>',vacancy_id),
    path('api/vacancies/top_ten',top_ten)


]
