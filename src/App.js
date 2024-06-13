import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleAddTodo = () => {
    if (toDo) {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]); // Spread the existing array and add the new todo
      setToDo(""); // Clear input after adding
    }
  };

  const handleDelete = (index) => {
    setTodos(toDos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="️ Add item..."
        />
        {/* <button onClick={handleAddTodo}>Add</button>  Use button for better UX */}
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj, index) => (
          <div key={index} className="todo">
            <div className="left">
              <input onChange={(e)=>{
                console.log(e.target.checked)
                console.log(obj)
                setTodos(toDos.filter(obj2=>{
                 if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                 }
                 return obj2

                }))
              }} value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
              
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() => handleDelete(index)}
              ></i>
            </div>
          </div>
        ))}

         {toDos.map((obj)=>{
           if(obj.status){
            return(<h1>{obj.text}</h1>)
           }
            return null;
         })}

      </div>
    </div>
  );
}

export default App;
