from django.db import models

class Category(models.Model):
    
    Name = models.CharField(max_length=255,default="Default")

    def __str__(self):
        return self.Name
    
    def to_json(self):
        return {
            "name": self.Name,
             "id": self.pk,
        }
   
       

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField(null=True)
    is_active = models.BooleanField(default=True)
    category_name = models.CharField(max_length=255,default="Default")
    # id = models.IntegerField(primary_key=True)



    # category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            "id": self.pk,
            "name": self.name,
            "category_name":self.category_name,
            "price": self.price,
            "description": self.description,
            "count": self.count,
            "is_active": self.is_active,
        }
   
