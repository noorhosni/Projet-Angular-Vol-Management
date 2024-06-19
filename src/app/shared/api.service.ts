import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) { }
  postEmployee(data : any){
  return this.http.post<any>("http://localhost:3000/posts", data)
  .pipe(map((res:any)=>{ return res;
  }))
  
  }
  getEmployee(data :any){
 return this.http.get<any>("http://localhost:3000/posts")
 .pipe(map((res:any)=>{ return res;
 }))
 }
 getALLEmployee(){
  return this.http.get<any>("http://localhost:3000/posts").pipe(map(res => <
 any>res));
  
  }
 deleteEmployee(id :number){
  return  (this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{ return res;
  })))}

  updateEmployee(data :any,id: number){
return (this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{ return res;
    })))
    }
    
    
}
