from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import AdminPasswordChangeForm,\
    UserChangeForm, UserCreationForm
from django.utils.translation import gettext_lazy as _

from django.contrib import messages

from accounts.helpers import set_all_integration_files

from accounts.models import Website, DesktopPrompt,\
    MobilePrompt, GDPRPrompt

from accounts.models import User, EmailSetting

@admin.register(User)
class UserAdmin(UserAdmin):
    add_form_template = 'admin/auth/user/add_form.html'
    change_user_password_template = None
    fieldsets = (
        (None, {'fields': ('password',)}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email',
                                         'stripe_customer_id', 'stripe_customer_object',)}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('password1', 'password2'),
        }),
    )
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
    search_fields = ('first_name', 'last_name', 'email')
    ordering = ('date_joined',)
    filter_horizontal = ('groups', 'user_permissions',)


@admin.register(EmailSetting)
class EmailSettingAdmin(admin.ModelAdmin):
    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(DesktopPrompt)
class DesktopPromptAdmin(admin.ModelAdmin):
    ...


@admin.register(MobilePrompt)
class MobilePromptAdmin(admin.ModelAdmin):
    ...


@admin.register(GDPRPrompt)
class GDPRPromptAdmin(admin.ModelAdmin):
    ...


@admin.register(Website)
class WebSiteAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'start_mode', 'user',)
    search_fields = ('title', 'url', 'user__email',)
    list_filter = ('start_mode',)
    actions = ['refresh_integration_files']

    def refresh_integration_files(self, request, queryset):
        for obj in queryset:
            set_all_integration_files(website=obj)
        self.message_user(request, "All relevant files refresh on media!", messages.SUCCESS)

    refresh_integration_files.short_description = "Refresh Integration files"
