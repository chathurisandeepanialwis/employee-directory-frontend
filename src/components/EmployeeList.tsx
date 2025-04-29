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
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>{new Date(emp.createdAt).toLocaleString()}</td>
            <td>{new Date(emp.updatedAt).toLocaleString()}</td>
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
