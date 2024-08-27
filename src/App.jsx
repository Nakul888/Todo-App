import AppName from "./components/AppName";
import Addtodo from "./components/addtodo";
import Todoitems from "./components/Todoitems";
import "./components/app.css";
import { useState } from "react";
function App() {
  const todoitems = [];
  const [activeTodo, setactiveTodo] = useState(todoitems);

  const handleonclick = (itemname, itemdate) => {
    setactiveTodo((currValue) => [
      ...currValue,
      { name: itemname, date: itemdate },
    ]);
  };

  const handledeletebutton = (todoItemname) => {
    console.log(todoItemname);
    const newTodo = activeTodo.filter((item) => item.name !== todoItemname);
    setactiveTodo(newTodo);
  };

  return (
    <div className="head">
      <AppName></AppName>
      <Addtodo handle={handleonclick}></Addtodo>
      <Todoitems
        handleclick={handledeletebutton}
        todoitem={activeTodo}
      ></Todoitems>
    </div>
  );
}

export default App;
