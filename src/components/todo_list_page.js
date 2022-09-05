import { useState, useEffect } from 'react';
import TodoCard from "./todo_card";
import TodoModal from "./todo_modal";
import { getApiClient } from '../server/get';
import '../style.css';

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  const [timeLeft, setTimeLeft] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('Default');

  useEffect(() => {
    setIsDeleted(false);
    getApiClient().getAllTodos(searchText, filter)
    .then(response => {
      if (response.data.success) {
        setTodos(response.data.todos);
      } else {
        console.log('Error');
      }
    })
    .catch(error => {
      console.log(error);
    });
  }, [showAdd, showEdit, isDeleted, searchText, filter]);

  useEffect(() => {
    getApiClient().getTimeLeft()
    .then(response => {
      if (response.data.success) {
        setTimeLeft(response.data.time_left);
      } else {
        console.log('Error');
      }
    })
    .catch(error => {
      console.log(error);
    });
  }, [showAdd, todos]);

  return (
    <div className="flex">
      <div className="box">
        <h1>What's The Plan For Today?</h1>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">&#x1F50D;</span>
          </div>
          <input type="text" className="form-control" placeholder="Search for a todo" aria-label="Username"
            aria-describedby="basic-addon1" onChange={(e) => setSearchText(e.target.value)}></input>
        </div>

        <div className="space-between-flex">
        <div className="form-group">
          <label htmlFor="filter">Filter Todos</label>
          <select className="form-control" id="filter" onChange={(e) => setFilter(e.target.value)}>
            <option>Default</option>
            <option>Today</option>
            <option>Passed</option>
          </select>
        </div>

          <button type="button" id="add-btn" className="btn btn-primary" data-toggle="modal" data-target="#todoModal"
            onClick={() => setShowAdd(true)}>Add</button>
          {showAdd
          ? <TodoModal type='add' show={showAdd} setShow={setShowAdd} />
          : ''}
        </div>

        <TodoCard show={showEdit} setShow={setShowEdit} todos={todos} timeLeft={timeLeft} setIsDeleted={setIsDeleted} />
      </div>
    </div>
  );
};

export default TodoListPage;
