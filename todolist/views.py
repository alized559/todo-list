from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Todo
from datetime import datetime
from django.utils.timezone import utc

# Create your views here.
@csrf_exempt
def get_all_todos(request):
	search_text = request.POST.get('search_text')
	filter_result = request.POST.get('filter_result')
	todos = Todo.objects.all()
	if search_text is not None:
		todos = [todo for todo in todos if search_text.lower() in todo.label.lower()
			or search_text.lower() in todo.description.lower()
			or search_text.lower() in todo.text_color.lower()
			or search_text.lower() in todo.background_color.lower()]
	todos = filter_todos(todos, filter_result)
	todos = [obj.to_dict() for obj in todos]
	return JsonResponse({ 'todos': todos })

def filter_todos(todos, filter_result):
	if filter_result == 'Default':
		return todos
	elif filter_result == 'Today':
		current_date = datetime.now().date()
		todos = Todo.objects.filter(deadline__contains=current_date)
	elif filter_result == 'Passed':
		current_date = datetime.now().date()
		todos = Todo.objects.filter(deadline__lte=current_date)
	return todos

@csrf_exempt
def get_time_left(request):
	todos = Todo.objects.all()
	current_date = datetime.utcnow().replace(tzinfo=utc)
	time_left = []
	for todo in todos:
		time_diff = None
		if todo.deadline is not None:
			time_diff = todo.deadline - current_date
			time_diff = time_diff.days
		time_left.append({ 'id': todo.id, 'date': time_diff })
	return JsonResponse({ 'time_left': time_left })

@csrf_exempt
def add_new_todo(request):
	label = request.POST.get('label')
	description = request.POST.get('description')
	text_color = request.POST.get('text_color')
	background_color = request.POST.get('background_color')
	date = request.POST.get('date')
	time = request.POST.get('time')
	if time is not None or date is not None:
		deadline_date = date + ' ' + time
		todo = Todo(label=label, description=description, text_color=text_color,
			background_color=background_color, deadline=deadline_date)
	else:
		todo = Todo(label=label, description=description, text_color=text_color,
			background_color=background_color)
	todo.save()
	return HttpResponse('success')

@csrf_exempt
def get_todo(request):
	todo_id = request.POST.get('todo_id')
	todo = Todo.objects.get(id=todo_id)
	todo = todo.to_dict()
	return JsonResponse({ 'todo': todo })

@csrf_exempt
def update_todo(request):
	todo_id = request.POST.get('todo_id')
	label = request.POST.get('label')
	description = request.POST.get('description')
	text_color = request.POST.get('text_color')
	background_color = request.POST.get('background_color')
	date = request.POST.get('date')
	time = request.POST.get('time')

	todo = Todo.objects.get(id=todo_id)
	todo.label = label
	todo.description = description
	todo.text_color = text_color
	todo.background_color = background_color
	todo.deadline = None
	if time is not None or date is not None:
		deadline_date = date + ' ' + time
		todo.deadline = deadline_date
	todo.save()
	return HttpResponse('success')

@csrf_exempt
def delete_todo(request):
	todo_id = request.POST.get('todo_id')
	todo = Todo.objects.get(id=todo_id)
	todo.delete()
	return HttpResponse('success')
