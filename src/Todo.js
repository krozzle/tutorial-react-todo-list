import React from 'react';
import toggleTodo from './App';

const Todo = ({ todo, toggleTodo }) => {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
