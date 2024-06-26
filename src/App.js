import './App.css';
import React , {useState, useEffect} from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos"))
  const [input , setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null)

    useEffect(() => {
   localStorage.setItem("todos", JSON.stringify(todos)); // meme si on actualise la page data reste afficher
    }, [todos]);

  


  return (
    <div className='container '>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList 
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
   