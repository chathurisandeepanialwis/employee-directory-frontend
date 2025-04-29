
import axios from 'axios';
import { Employee } from '../types/Employee';

const API_URL = 'http://localhost:8080/api/employee';

export const getEmployees = () => axios.get<Employee[]>(API_URL);
export const createEmployee = (employee: Employee) => axios.post<Employee>(API_URL, employee);
export const updateEmployee = (id: number, employee: Employee) => axios.put<Employee>(`${API_URL}/${id}`, employee);
export const deleteEmployee = (id: number) => axios.delete<void>(`${API_URL}/${id}`);


// export interface Employee {
//     id?: number;
//     name: string;
//     email: string;
//     department: Department;
//     createdAt?: string;
//     updatedAt?: string;
//   }
  
//   export enum Department {
//     HR = 'HR',
//     IT = 'IT',
//     FINANCE = 'Finance',
//     OPERATIONS = 'Operations',
//     MARKETING = 'Marketing',
//     SALES = 'Sales'
//   }