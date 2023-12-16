import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { TodoContext } from "./../context/TodoProvider";
import { toast } from 'react-hot-toast';

const Form = () => {
  const { dispatch } = useContext(TodoContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { id: nanoid(5), text, isChecked: false };
    dispatch({ type: "ADD_TODO", payload: newTodo });

    toast.success("Todo added successfully")

    //clear input
    setText("");
  };

  return (
    <div className="w-full md:w-3/4 mx-auto">
      <form onSubmit={handleSubmit} className="flex relative">
        <div className="w-full">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            required
            className="w-full px-6 py-2 rounded-full outline-none border-2 border-slate-400"
          />
        </div>
        <button className="absolute right-4 top-[10px]" type="submit">
          <BiPlusCircle className="text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default Form;
