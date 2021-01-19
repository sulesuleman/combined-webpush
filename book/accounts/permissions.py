from rest_framework.permissions import BasePermission

from accounts.models import Website


class HasWebsiteFullAccess(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class HasWebsite(BasePermission):
    message = "User has no website assocaited"
    def has_permission(self, request, view):
        return True if hasattr(request.user, 'website') else False


class IsSdkAuthWebsiteAssociated(BasePermission):
    message = "You don't have permission to access this resource!"

    def has_permission(self, request, view):
        return True if request.auth.__class__ == Website else False


