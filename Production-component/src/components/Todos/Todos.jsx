import { useState } from "react";

function Todo({Id,title,description,taskCompleted}){
  return(
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>status :{taskCompleted ? "Yes": "No"}</p>
    </div>
  )
}
function Todos() {
  const [todos, setTodos] = useState([
    {
      Id: 1,
      title: "Go to Morning Walk",
      description: "Duration 1 Hour , from 7 am - 8am",
      taskCompleted: false,
    },
    {
      Id: 2,
      title: "Research",
      description: "Research on the Micro-Organism Lifecycle",
      taskCompleted: true,
    },
    {
      Id: 3,
      title: "Nutrient Rich Meal",
      description: "Taking omega-3 Capsule, Juice, Sprouts, Apple",
      taskCompleted: true,
    },
  ]);

  function addTodos(){
    setTodos([...todos, {
         Id:todos.length+1,
        title: "New Todos",
        description :"Detail about new Todos",
        taskCompleted:false
    }])
  }

  return (
    <div>
        <button onClick={addTodos}>Add Random Todos</button>
      {todos.map(function (todo) {
        return (
          <Todo
            key={todo.Id}
            Id={todo.Id}
            title={todo.title}
            description={todo.description}
            taskCompleted={todo.taskCompleted}
          />
        );
      })}
    </div>
  );
}

export default Todos;

/*
function Todo(props){
  return (
    <div>
      <h1>{props.Id}</h1>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.taskCompleted}</p>
    </div>
  )
} */