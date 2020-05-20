import React from 'react';
import Todo from './Todo';
import toggleTodo from './App';

function TodoList({ todos, toggleTodo }) {
  return todos.map(todo => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}></Todo>;
  });
}

export default TodoList;
