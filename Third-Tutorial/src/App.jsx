import { useState } from "react";
import AddTasks from "./components/AddTasks"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([{
    id:1,
    title:"Estudar Programacao",
    description:"Estudar programacao para se tornar um dev.",
    isCompleted: false
  },
  {
    id:2,
    title:"Estudar NodeJS",
    description:"Estudar programacao para se tornar um dev.",
    isCompleted: false
  },
  {
    id:3,
    title:"Estudar Espanhol",
    description:"Estudar programacao para se tornar um dev.",
    isCompleted: false
  }
])

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTasks />
        <Tasks tasks={tasks} banana="this is bananas"/>
      </div>
    </div>
  );
}

export default App;
