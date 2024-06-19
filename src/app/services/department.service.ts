import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) {}

  getListDepartments(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/dali`);
  }

  postDepartments(data: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/departments`, data);
  }

  updateDepartment(data: any): Observable<any> {
    console.log(data);
    return this.httpClient.put<any>(
      `${environment.apiUrl}/${environment.prefix}/departments/${data.id}`, { departmentName: data.departmentName }
    );
  }

  getOneDepartment(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/departments/${id}`);
  }
}
