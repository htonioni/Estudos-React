import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {
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
    </div>
  );
}

export default App;
