import { RiDeleteBin5Fill } from "react-icons/ri";
function Todoitem({ todoname, tododate, handleDEL }) {
  return (
    <div className="grid-container">
      <div className="grid-item">{todoname}</div>
      <div className="grid-item">{tododate}</div>
      <div className="grid-item">
        <button
          type="button"
          onClick={() => handleDEL(todoname)}
          className="btn btn-danger my-button"
        >
          <RiDeleteBin5Fill />
        </button>
      </div>
    </div>
  );
}
export default Todoitem;
