import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const  Todo =() =>{
  const[todoList, setTodoList] = useState([]);
  const handleGetTodo = (todo) =>{
    setTodoList([...todoList, todo]);
  }
  return (
    <div>
      <TodoAdd onGetTodo={handleGetTodo}/>
      <TodoList todoList={todoList} />
    </div>
  )
}

export default Todo