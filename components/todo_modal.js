import { useEffect, useState } from 'react';
import { TEXT_COLOR, BACKGROUND_COLOR } from '/pages/params';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getApiClient } from '../server/get';
import { dict } from '../pages/month';

const TodoModal = (props) => {
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [textColor, setTextColor] = useState(TEXT_COLOR[0]);
  const [BackColor, setBackColor] = useState(BACKGROUND_COLOR[0]);
  const [error, setError] = useState('');
  const [withDeadline, setWithDeadline] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const { type, show, setShow, todoID } = props;
  
  useEffect(() => {
    if (todoID !== undefined) {
      getApiClient().getTodo(todoID)
      .then(response => {
        if (response.data.success) {
          setLabel(response.data.todo.label);
          setDescription(response.data.todo.description);
          setTextColor(response.data.todo.text_color);
          setBackColor(response.data.todo.background_color);
          if (response.data.todo.deadline !== null) {
            const deadline = response.data.todo.deadline;
            const time = '';
            const day = '';
            const year = '';
            const month = '';
            for (var i = 5; i < deadline.length - 3; i++) {
              if (i <= 6)
                day += deadline[i];
              else if (i >= 8 && i <= 10)
                month += deadline[i];
              else if (i >= 12 && i <= 15)
                year += deadline[i];
              else if (i >= 16)
                time += deadline[i];
            }
            const date = year + '-' + dict[month] + '-' + day;
            setDate(date);
            setTime(time.trim());
            setWithDeadline(true);
          }
        } else {
          setError('Something Went Wrong!');
        }
      })
      .catch(error => {
        setError('Something Went Wrong!');
      });
    }
  }, []);

  const submit = () => {
    if (type === 'add') {
      if (label === '') {
        setError('Label must not be empty!');
      } else if (withDeadline && (date === '' || time === '')) {
        setError('Date and Time must not be empty!');
      } else {
        getApiClient().addTodo(label, description, textColor, BackColor, date, time)
        .then(response => {
          if (response.data.success) {
            setShow(false);
            setError('');
          }
          else
            setError('Something Went Wrong!');
        })
        .catch(error => {
          setError('Something Went Wrong!');
        });
      }
    } else {
      if (label === '') {
        setError('Label must not be empty!');
      } else if (withDeadline && (date === '' || time === '')) {
        setError('Date and Time must not be empty!');
      } else {
        getApiClient().updateTodo(todoID, label, description, textColor, BackColor, date, time)
        .then(response => {
          if (response.data.success) {
            setShow(false);
            setError('');
          }
          else
            setError('Something Went Wrong!');
        })
        .catch(error => {
          setError('Something Went Wrong!');
        });
      }
    }
  };

  const checkIfWithDeadline = (e) => { 
    setWithDeadline(e.target.checked);
    setDate('');
    setTime('');
  };

  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{type === 'add' ? 'Add New Todo' : 'Edit Todo'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error !== ''
        ? <p className="error">{error}</p>
        : ''}
        <form>
          <div className="form-group">
            <label htmlFor="label">Label</label>
            <input type="text" className="form-control" value={label} id="label" placeholder="Enter label"
              onChange={(e) => setLabel(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea className="form-control" value={description} id="desc" rows="3"
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="form-check">
            {withDeadline
            ? <input type="checkbox" className="form-check-input" id="deadline" onChange={checkIfWithDeadline} checked></input>
            : <input type="checkbox" className="form-check-input" id="deadline" onChange={checkIfWithDeadline}></input>}
            <label className="form-check-label" htmlFor="deadline" id="deadline-text">
              With Deadline
            </label><br></br>
            {withDeadline
            ? <>
                <input type="date" className="form-check-input" id="date" onChange={(e) => setDate(e.target.value)} value={date}></input>
                <input type="time" className="form-check-input" id="time" step="1" onChange={(e) => setTime(e.target.value)} value={time}></input>
                <br></br>
              </>
            : ''}
          </div><br></br>
          <div className="form-group">
            <label htmlFor="tcolor">Text Color</label>
            <select className="form-control" value={textColor} id="tcolor" onChange={(e) => setTextColor(e.target.value)}>
              {TEXT_COLOR.map((color, index) => {
                return <option key={index}>{color}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="bcolor">Background Color</label>
            <select className="form-control" value={BackColor} id="tcolor" onChange={(e) => setBackColor(e.target.value)}>
              {BACKGROUND_COLOR.map((color, index) => {
                return <option key={index}>{color}</option>
              })}
            </select>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => {setShow(false); setError('');}}>
          Cancel
        </Button>
        <button type="button" id="modal-btn" className="btn btn-success" onClick={submit}>
          {type === 'add' ? 'Add' : 'Edit'}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoModal;
