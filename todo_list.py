from datetime import datetime
from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from db import db
from models.todos import Todo

todo_list_api = Blueprint('todo_list_api', __name__)

@todo_list_api.route('/api/get_all_todos', methods=['POST'])
@cross_origin()
def get_all_todos():
	search_text = request.form.get('search_text')
	filter_result = request.form.get('filter_result')
	todos = Todo.query.all()
	if search_text is not None:
		todos = [todo for todo in todos if search_text.lower() in todo.label.lower()
			or search_text.lower() in todo.description.lower()
			or search_text.lower() in todo.text_color.lower()
			or search_text.lower() in todo.background_color.lower()]
	todos = filter_todos(todos, filter_result)
	todos = [obj.to_dict() for obj in todos]
	return jsonify(success=True, todos=todos)

def filter_todos(todos, filter_result):
	if filter_result == 'Default':
		return todos
	elif filter_result == 'Today':
		current_date = datetime.now().date()
		todos = Todo.query.filter(Todo.deadline.contains(current_date)).all()
	elif filter_result == 'Passed':
		current_date = datetime.now().date()
		todos = Todo.query.filter(Todo.deadline < current_date).all()
	return todos

@todo_list_api.route('/api/get_time_left', methods=['POST'])
@cross_origin()
def get_time_left():
	todos = Todo.query.all()
	current_date = datetime.utcnow().replace(tzinfo=None)
	time_left = []
	for todo in todos:
		time_diff = None
		if todo.deadline is not None:
			time_diff = todo.deadline - current_date
			time_diff = time_diff.days
		time_left.append({ 'id': todo.id, 'date': time_diff })
	return jsonify(success=True, time_left=time_left)

@todo_list_api.route('/api/add_new_todo', methods=['POST'])
@cross_origin()
def add_new_todo():
	label = request.form.get('label')
	description = request.form.get('description')
	text_color = request.form.get('text_color')
	background_color = request.form.get('background_color')
	date = request.form.get('date')
	time = request.form.get('time')
	if time is not None or date is not None:
		date_list = date.split('-')
		time_list = time.split(':')
		deadline_date = datetime(int(date_list[0]), int(date_list[1]), int(date_list[2]),
			int(time_list[0]), int(time_list[1]), int(time_list[2]))
		todo = Todo(label=label, description=description, text_color=text_color,
			background_color=background_color, deadline=deadline_date)
	else:
		todo = Todo(label=label, description=description, text_color=text_color,
			background_color=background_color)
	db.session.add(todo)
	db.session.commit()
	return jsonify(success=True)

@todo_list_api.route('/api/get_todo', methods=['POST'])
@cross_origin()
def get_todo():
	todo_id = request.form.get('todo_id')
	todo = Todo.query.filter(Todo.id == todo_id).first()
	todo = todo.to_dict()
	return jsonify(success=True, todo=todo)

@todo_list_api.route('/api/update_todo', methods=['POST'])
@cross_origin()
def update_todo():
	todo_id = request.form.get('todo_id')
	label = request.form.get('label')
	description = request.form.get('description')
	text_color = request.form.get('text_color')
	background_color = request.form.get('background_color')
	date = request.form.get('date')
	time = request.form.get('time')

	todo = Todo.query.filter(Todo.id == todo_id).first()
	todo.label = label
	todo.description = description
	todo.text_color = text_color
	todo.background_color = background_color
	todo.deadline = None
	if time is not None or date is not None:
		date_list = date.split('-')
		time_list = time.split(':')
		deadline_date = datetime(int(date_list[0]), int(date_list[1]), int(date_list[2]),
			int(time_list[0]), int(time_list[1]), int(time_list[2]))
		todo.deadline = deadline_date
	db.session.commit()
	return jsonify(success=True)

@todo_list_api.route('/api/delete_todo', methods=['POST'])
@cross_origin()
def delete_todo():
	todo_id = request.form.get('todo_id')
	todo = Todo.query.filter(Todo.id == todo_id).first()
	db.session.delete(todo)
	db.session.commit()
	return jsonify(success=True)
