import axios from 'axios';

function post(endpoint, data) {
  if (!data) data = new FormData();
  return axios.post(endpoint, data);
}

class WebApiClient {

  getAllTodos(searchText, filter) {
    const data = new FormData();
    if (searchText) data.append('search_text', searchText);
    if (filter) data.append('filter_result', filter);
    return post('/api/get_all_todos', data);
  }

  getTimeLeft() {
    const data = new FormData();
    return post('/api/get_time_left', data);
  }

  addTodo(label, description, textColor, backColor, date, time) {
    const data = new FormData();
    data.append('label', label);
    data.append('description', description);
    data.append('text_color', textColor);
    data.append('background_color', backColor);
    if (date) data.append('date', date);
    if (time) data.append('time', time);
    return post('/api/add_new_todo', data);
  }

  getTodo(todoID) {
    const data = new FormData();
    data.append('todo_id', todoID);
    return post('/api/get_todo', data);
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
    return post('/api/update_todo', data);
  }

  deleteTodo(todoID) {
    const data = new FormData();
    data.append('todo_id', todoID);
    return post('/api/delete_todo', data);
  }
}

export default WebApiClient;
