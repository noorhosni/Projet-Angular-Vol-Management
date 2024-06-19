import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees`);
  }

  postEmployees(data: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/employees`, data);
  }

  getEmployee(employeeId: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees/${employeeId}`);
  }

  getEmployeesByDepartment(departmentId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/employees/${departmentId}`);
  }

  deleteEmployee(departmentId: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(`${environment.apiUrl}/${environment.prefix}/employees/${departmentId}`);
  }

  getDepartmentById(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/departments/${id}`);
  }

  getDepartments(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/dali`);
  }

  updateEmployee(id: number, data: any): Observable<any[]> {
    const { employeeFirstName, employeeLastName, employeePhone, department } = data;
    return this.httpClient.put<any[]>(`${environment.apiUrl}/${environment.prefix}/employees/${id}`, {
      employeeFirstName,
      "employeeLastName": employeeLastName, // Fix the typo here
      "employeePhoneNumber": employeePhone,
      "departmentId": department.id
    });
  }
}
