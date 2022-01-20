import React, { useEffect, useState } from 'react';
import './app.css';

const TodoList = () => {

  const storagedList = JSON.parse(localStorage.getItem("todoList"));
  const [list, setList] = useState(storagedList);
  const [todo, setTodo] = useState('');

  const handleTodoInputChange = (e) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    storeList();
  }, [list]);


  const storeList = () => {
    localStorage.setItem("todoList", JSON.stringify(list))
  }



  const handleEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      if (todo.trim() === '') {
        alert('Lütfen todo içeriğini girin');
        return;
      }
      const todoObj = {
        id: new Date().getUTCMilliseconds(),
        content: todo,
        completed: false,
      };
      setList((prev) => [...prev, todoObj].reverse());

      setTodo('');
    }
  };

  const handleCheckedChanged = (e, todoId) => {

    setList((prev) =>
      prev.map((p) => {
        if (p.id === todoId) {
          p.completed = e.target.checked;
        }
        return p;
      })
    );

  };

  const handleTodoDelete = (todoId) => {
    setList((prev) => prev.filter((p) => p.id !== todoId));

  };

  return (
    <div className="container mx-auto">
      <h1>Todo List</h1>
      <div className="card">
        <div className="card-body p-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={todo}
              onChange={handleTodoInputChange}
              onKeyDown={handleEnterKeyPress}
              placeholder="Write todo and press enter"
            />
          </div>
          <hr />
          <ul className="list-group">
            {list.map((todo, index) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between"
                aria-current="true"
              >
                <div>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckedChanged(e, todo.id)}

                  />
                  <span className={todo.completed ? "completed" : "incompleted"}> {todo.content}</span>
                </div>
                <button
                  onClick={() => handleTodoDelete(todo.id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
