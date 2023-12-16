import { useContext } from "react";
import TodoList from "./TodoList";
import { TodoContext } from './../context/TodoProvider';

const Todos = () => {
  const {todos} = useContext(TodoContext)
  return (
    <ul className="flex flex-col gap-5">
      {todos.length > 0 ? (
          todos.map(todo => (
            <TodoList key={todo.id} {...todo}/>
          ))
        ) : (
          <h1 className="text-xl my-2 border-t border-slate-300 pt-5">There is no todo added in this list...</h1>
        )
      }
    </ul>
  )
}

export default Todos;