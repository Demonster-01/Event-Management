from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Allow read-only permissions for any request
        if request.method in permissions.SAFE_METHODS:
            return False

        # Allow write permissions only to the author of the planner list
        return obj.user == request.user
