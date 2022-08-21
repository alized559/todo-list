import { useState, useCallback } from 'react';
import { getApiClient } from '/server/get';
import TodoModal from './todo_modal';

const TodoCard = (props) => {
  const [todoID, setTodoID] = useState(-1);
  const [error, setError] = useState('');

  const { show, setShow, todos, timeLeft, setIsDeleted } = props;

  const deleteTodo = useCallback((e) => {
    const todoID = e.target.id;
    getApiClient().deleteTodo(todoID)
    .then(response => {
      if (response.data === 'success') {
        setIsDeleted(true);
        setError('');
      } else {
        setError('Something Went Wrong!');
      }
    })
    .catch(error => {
      setError('Something Went Wrong!');
    });
  });
  
  return (
    <div>
      <div className="card-container">
        {error !== ''
        ? <p className="error">{error}</p>
        : ''}
        {todos.map((todo, index) => {
          return (
            <div className="card-flex" key={todo.id}>
              <div id="card" style={{ color: todo.text_color, backgroundColor: todo.background_color }}
                onClick={() => { setShow(true); setTodoID(todo.id) }}>
                <div className="card-label-flex">
                  <p>{todo.label}</p>
                  <DisplayTimeLeft timeLeft={timeLeft} todo={todo} index={index} />
                </div>
              </div>
              <i className="fa fa-trash-o" id={todo.id} onClick={deleteTodo}></i>
            </div>
          );
        })}
      </div>
      {show
      ? <TodoModal type='edit' show={show} setShow={setShow} todoID={todoID} />
      : ''}
    </div>
  );
};

const DisplayTimeLeft = ({ timeLeft, todo, index }) => {
  let date;
  if (timeLeft && timeLeft[index] && timeLeft[index].date)
    date = timeLeft[timeLeft.map(time => time.id).indexOf(todo.id)].date;
  else
    return(<></>);

  return (
    <>
      {date !== null && date === 1
      ? <p>1 day left</p>
      : date !== null && date !== 0 && date > 0
      ? <p>{date} days left</p>
      : date !== null && date === 0
      ? <p>Today</p>
      : date !== null && date < 0
      ? <p>Passed</p>
      : ''}
    </>
  );
};

export default TodoCard;