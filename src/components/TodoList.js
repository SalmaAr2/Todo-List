import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const TodoList = ({ todos, setTodos, setEditTodo}) => {

  const handleComplete = (todo) =>{
    setTodos(
      todos.map((item) => {
        if(item.id === todo.id){
          return {...item, completed: !item.completed}
        }
        return item
      })
    )
  }

  const handleEdit=({id})=>{
    const findTodo = todos.find((todo)=>todo.id ===id)
    setEditTodo(findTodo)
  }

    const handleDelete = ({id}) =>{ //supprimer  
        setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : "" }`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
          <button className="button-complete task-button" onClick={()=> handleComplete(todo)}>
        <FontAwesomeIcon icon={faCheckCircle} style={{color : '#5CDF3E'}}/>{/* icon */}
      </button>
      <button className="button-complete task-button" onClick={()=> handleEdit(todo)}>
        <FontAwesomeIcon icon={faEdit} style={{color : '#FFC533'}}/>{/* icon edit */}
      </button>
      <button className="button-complete task-button" onClick={()=> handleDelete(todo)}>
        <FontAwesomeIcon icon={faTrash}   />{/* icon supp */}
      </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
