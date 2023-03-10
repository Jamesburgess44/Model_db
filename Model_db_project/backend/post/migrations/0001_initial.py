# Generated by Django 4.1.2 on 2022-11-09 02:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(default='none', max_length=25)),
                ('last_name', models.CharField(default='none', max_length=25)),
                ('city', models.CharField(default='none', max_length=50)),
                ('instagram_link', models.CharField(default='none', max_length=500)),
                ('notes', models.TextField(default='none', max_length=900)),
                ('age', models.IntegerField(default=0)),
                ('gender', models.CharField(default='none', max_length=100)),
                ('ethnicity', models.CharField(default='none', max_length=25)),
                ('image', models.ImageField(upload_to='post_images')),
            ],
        ),
    ]
