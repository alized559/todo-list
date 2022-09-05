from django.urls import path
from . import views

urlpatterns = [
  path('', views.get_all_todos, name='get_all_todos'),
  path('addTodo', views.add_new_todo, name='add_new_todo'),
  path('getTodo', views.get_todo, name='get_todo'),
  path('updateTodo', views.update_todo, name='update_todo'),
  path('deleteTodo', views.delete_todo, name='delete_todo'),
  path('getTimeLeft', views.get_time_left, name='get_time_left')
]
