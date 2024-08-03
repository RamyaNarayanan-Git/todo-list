import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './components/TodoInput'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');


  function addTodos(newTodos) {
    let newList = [...todos, newTodos];
    setTodos(newList);
    persistData(newList);
  }

  function handleDelete(index) {
    console.log(index);
    let newList = [...todos];
    newList.splice(index, 1);
    setTodos(newList);
    persistData(newList);
  }

  function handleEdit(index, newItem) {

    const valuesToEdit = todos[index];
    setTodoValue(valuesToEdit);
    handleDelete(index);
  }

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, [])

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        handleAddTodos={addTodos}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  )
}

export default App
