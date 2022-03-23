# Generated by Django 4.0 on 2022-03-17 18:37

from django.db import migrations, models
import api.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial_manual'),
    ]

    operations = [
        migrations.CreateModel(
        name='Cart',
        fields=[
            ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_cart', to='auth.user')),
        ],
        ),
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cart_item', to='api.cart')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cart_product', to='api.computer')),
            ],
        ),
    ]