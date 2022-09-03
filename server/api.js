import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/';

function post(endpoint, data) {
  if (!data) data = new FormData();
  return axios.post(API_URL + endpoint, data);
}

class WebApiClient {

  getAllTodos(searchText, filter) {
    const data = new FormData();
    if (searchText) data.append('search_text', searchText);
    if (filter) data.append('filter_result', filter);
    return post('get_all_todos', data);
  }

  getTimeLeft() {
    const data = new FormData();
    return post('get_time_left', data);
  }

  addTodo(label, description, textColor, backColor, date, time) {
    const data = new FormData();
    data.append('label', label);
    data.append('description', description);
    data.append('text_color', textColor);
    data.append('background_color', backColor);
    if (date) data.append('date', date);
    if (time) data.append('time', time);
    return post('add_new_todo', data);
  }

  getTodo(todoID) {
    const data = new FormData();
    data.append('todo_id', todoID);
    return post('get_todo', data);
  }

  updateTodo(todoID, label, description, textColor, backColor, date, time) {
    const data = new FormData();
    data.append('todo_id', todoID);
    data.append('label', label);
    data.append('description', description);
    data.append('text_color', textColor);
    data.append('background_color', backColor);
    if (date) data.append('date', date);
    if (time) data.append('time', time);
    return post('update_todo', data);
  }

  deleteTodo(todoID) {
    const data = new FormData();
    data.append('todo_id', todoID);
    return post('delete_todo', data);
  }
}

export default WebApiClient;
