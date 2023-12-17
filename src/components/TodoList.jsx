import { useContext } from "react";
import { BiCheck, BiEdit, BiTrashAlt } from "react-icons/bi";
import { TodoContext } from "./../context/TodoProvider";
import { toast } from "react-hot-toast";

const TodoList = ({ id, text, isChecked }) => {
  const { dispatch } = useContext(TodoContext);
  const checkTodo = () => {
    dispatch({ type: "CHECK_TODO", payload: id });
    if(isChecked) {
      toast.success("Uncompleted")
    }
    else{
      toast.success("Completed")
    }
  };

  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: id });
    toast.success("Todo deleted", {
      style: {
        color: "#ff0000",
      },
      iconTheme: {
        primary: "#ff0000"
      },
    });
  };

  const editTodo = () => {
    dispatch({ type: "EDIT_TODO", payload: id });
  }

  return (
    <li className="flex items-center justify-between text-xl bg-slate-400 px-5 py-3 rounded">
      <div className="flex gap-6 items-center">
        <button
          className={`border-2 rounded-full p-1 border-green-500 hover:bg-green-500 hover:text-white ${
            isChecked && "bg-green-500 text-white"
          }`}
          onClick={checkTodo}
        >
          <BiCheck />
        </button>
        <p className={`${isChecked && "line-through"}`}>{text}</p>
      </div>
      <div>
        <button className="mr-2 text-blue-700" onClick={editTodo}>
          <BiEdit />
        </button>
        <button className="text-red-500" onClick={deleteTodo}>
          <BiTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
