import Navbar from './components/Navbar';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import { useState } from 'react';
import { Employee } from './types/Employee';

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleEdit = (employee: Employee) => setSelectedEmployee(employee);
  const handleSaved = () => {
    setSelectedEmployee(null);
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <EmployeeForm selectedEmployee={selectedEmployee} onSaved={handleSaved} />
        <EmployeeList key={refreshKey} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;