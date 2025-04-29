import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { Employee, createEmployee, updateEmployee } from '../services/employeeService';

interface EmployeeFormProps {
  selectedEmployee: Employee | null;
  onSaved: () => void;
}

export default function EmployeeForm({ selectedEmployee, onSaved }: EmployeeFormProps) {
  const form = useForm<Employee>({
    initialValues: {
      name: '',
      email: '',
      department: '',
    },
  });

  useEffect(() => {
    if (selectedEmployee) {
      form.setValues(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleSubmit = async (values: Employee) => {
    if (selectedEmployee && selectedEmployee.id) {
      await updateEmployee(selectedEmployee.id, values);
    } else {
      await createEmployee(values);
    }
    form.reset();
    onSaved();
  };

  return (
    <form
      onSubmit={form.onSubmit(handleSubmit)}
      className="border p-4 rounded shadow-sm mb-4 bg-light"
    >
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          {...form.getInputProps('name')}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          {...form.getInputProps('email')}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Department</label>
        <select
          {...form.getInputProps('department')}
          className="form-select"
          required
        >
          <option value="">Select...</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="FINANCE">FINANCE</option>
          <option value="OPERATIONS">OPERATIONS</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        {selectedEmployee ? 'Update' : 'Add'} Employee
      </button>
    </form>
  );
}
