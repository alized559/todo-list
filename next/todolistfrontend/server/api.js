import axios from 'axios';

const API_URL = 'http://127.0.0.1/api/';

function post(endpoint, data) {
  if (!data) data = new FormData();
  return axios.post(API_URL + endpoint, data);
}

class WebApiClient {

  getAllTodos(searchText, filter) {
    const data = new FormData();
    data.append('search_text', searchText);
    data.append('filter_result', filter);
    return post('', data);
  }

  getTimeLeft() {
    const data = new FormData();
    return post('getTimeLeft', data);
  }

  addTodo(label, description, textColor, backColor, date, time) {
    const data = new FormData();
    data.append('label', label);
    data.append('description', description);
    data.append('text_color', textColor);
    data.append('background_color', backColor);
    data.append('date', date);
    data.append('time', time);
    return post('addTodo', data);
  }

  getTodo(todoID) {
    const data = new FormData();
    data.append('todo_id', todoID);
    return post('getTodo', data);
  }

  updateTodo(todoID, label, description, textColor, backColor, date, time) {
    const data = new FormData();
    data.append('todo_id', todoID);
    data.append('label', label);
    data.append('description', description);
    data.append('text_color', textColor);
    data.append('background_color', backColor);
    data.append('date', date);
    data.append('time', time);
    return post('updateTodo', data);
  }

  deleteTodo(todoID) {
    const data = new FormData();
    data.append('todo_id', todoID);
    return post('deleteTodo', data);
  }
}

export default WebApiClient;
