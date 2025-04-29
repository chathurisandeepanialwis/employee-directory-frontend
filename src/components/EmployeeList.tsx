import { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee, Employee } from '../services/employeeService';

interface EmployeeListProps {
  onEdit: (employee: Employee) => void;
}

export default function EmployeeList({ onEdit }: EmployeeListProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const loadEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-sm btn-warning" onClick={() => onEdit(emp)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(emp.id!)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
