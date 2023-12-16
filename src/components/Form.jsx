import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { TodoContext } from "./../context/TodoProvider";

const Form = () => {
  const { dispatch } = useContext(TodoContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { id: nanoid(5), text, isChecked: false };
    dispatch({ type: "ADD_TODO", payload: newTodo });

    //clear input
    setText("");
  };

  return (
    <div className="w-3/4 mx-auto">
      <form onSubmit={handleSubmit} className="flex relative">
        <div className="w-full">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            required
            className="w-full px-6 py-2 rounded-full"
          />
        </div>
        <button className="absolute right-4 top-2" type="submit">
          <BiPlusCircle className="text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default Form;
