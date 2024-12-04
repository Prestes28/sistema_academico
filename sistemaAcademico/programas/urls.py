from django.urls import path
from .views import ProgramaListCreate

urlpatterns = [
    path('', ProgramaListCreate.as_view(), name='programa-list-create'),
]
