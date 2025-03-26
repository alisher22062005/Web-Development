# Generated by Django 5.1.7 on 2025-03-26 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_category_categoryname_remove_product_category_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='Name',
            field=models.CharField(default='Default', max_length=255),
        ),
        migrations.AlterField(
            model_name='product',
            name='category_name',
            field=models.CharField(default='Default', max_length=255),
        ),
        migrations.AlterField(
            model_name='product',
            name='count',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
