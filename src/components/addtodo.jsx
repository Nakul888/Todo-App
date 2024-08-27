import { useRef } from "react";
import { MdOutlineAdd } from "react-icons/md";
function Addtodo({ handle }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddbuttonclicked = () => {
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    handle(todoName, todoDate);
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter Todo Here"
        />
      </div>
      <div className="grid-item">
        <input type="date" ref={dueDateElement} />
      </div>
      <div className="grid-item">
        <button
          type="button"
          className="btn btn-success my-button"
          onClick={handleAddbuttonclicked}
        >
          <MdOutlineAdd />
        </button>
      </div>
    </div>
  );
}
export default Addtodo;
