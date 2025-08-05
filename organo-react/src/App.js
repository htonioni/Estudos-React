import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time'

function App() {
  const Times = [
    {
      nome: '',
      corPrimaria: '',
      corSecundaria: ""
    },
    {
      nome: 'Pro Code',
      corPrimaria: '#57c278',
      corSecundaria: "#D9f7E9"
    },
    {
      nome: 'Low Code',
      corPrimaria: '#82CFFA',
      corSecundaria: "#E8F8FF"
    },
    {
      nome: 'No Code',
      corPrimaria: '#A6D157',
      corSecundaria: "#F0F8E2"
    },
  ]

  const [employees, setEmployees] = useState([])

  const handleNewEmployee = (employee) => {
    setEmployees([...employees, employee])
    console.log(employee);

  }

  return (
    <div className='App'>
      <Banner />
      <Formulario
        handleEmployeeSubmit={employee => handleNewEmployee(employee)}
      />
      <Time teamName={"Front-end"} />
    </div>
  );
}

export default App;
