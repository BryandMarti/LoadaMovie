import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      const newTodo = { id: Date.now(), text: inputValue };
      setTodos([...todos, newTodo]);
      setInputValue('');
    } else {
      alert('Please enter a task before adding.');
    }
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="todoContainer">
      <h2>My To-Do List</h2>
      <input 
        className="todoInput" 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Add a new task"
      />
      <button className="todoButton" onClick={handleSubmit}>Add Todo</button>
      <ul className="todoList">
        {todos.map(todo => (
          <li key={todo.id} className="todoListItem">
            {todo.text}
            <button className="todoDeleteButton" onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
