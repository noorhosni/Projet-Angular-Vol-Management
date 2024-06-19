import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VolsService {
  private apiUrl = environment.api;
  constructor(private http: HttpClient) {}
  getAllVols() {
    return this.http.get(`${this.apiUrl}/vols`);
  }

  getAllCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  getVolsCategories() {
    return this.http.get(`${this.apiUrl}/vols/categories`);
  }
 
}




