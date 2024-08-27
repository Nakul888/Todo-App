import Todoitem from "./Todoitem";

function Todoitems({ todoitem, handleclick }) {
  return (
    <div>
      {todoitem.map((item) => (
        <Todoitem
          key={item.name}
          handleDEL={handleclick}
          tododate={item.date}
          todoname={item.name}
        ></Todoitem>
      ))}
    </div>
  );
}
export default Todoitems;
