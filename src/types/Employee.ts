import axios from 'axios';

export interface Employee {
  id?: number;
  name: string;
  email: string;
  department: string;
  createdAt?: string;
  updatedAt?: string;
}

const API_URL = 'http://localhost:8080/api/employees';

export const getEmployees = () => axios.get<Employee[]>(API_URL);
export const createEmployee = (employee: Employee) => axios.post<Employee>(API_URL, employee);
export const updateEmployee = (id: number, employee: Employee) => axios.put<Employee>(`${API_URL}/${id}`, employee);
export const deleteEmployee = (id: number) => axios.delete<void>(`${API_URL}/${id}`);
