# Generated by Django 3.1.4 on 2021-01-19 05:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('uploads', '0001_initial'),
        ('accounts', '0001_initial'),
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.AddField(
            model_name='mobileprompt',
            name='icon',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='uploads.uploadedimage'),
        ),
        migrations.AddField(
            model_name='mobileprompt',
            name='website',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='accounts.website'),
        ),
        migrations.AddField(
            model_name='gdprprompt',
            name='icon',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='uploads.uploadedimage'),
        ),
        migrations.AddField(
            model_name='gdprprompt',
            name='website',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='accounts.website'),
        ),
        migrations.AddField(
            model_name='emailsetting',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='desktopprompt',
            name='icon',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='uploads.uploadedimage'),
        ),
        migrations.AddField(
            model_name='desktopprompt',
            name='website',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='accounts.website'),
        ),
        migrations.AddField(
            model_name='user',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups'),
        ),
        migrations.AddField(
            model_name='user',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
    ]
