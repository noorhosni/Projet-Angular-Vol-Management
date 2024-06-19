import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employee.dashboard.model';  // .ts assumed, adjust if needed
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  formValue !:FormGroup;
  employeeModelObj :EmployeeModel=new EmployeeModel();
  employeeData !: any;
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }
  ngOnInit(): void {
   this.formValue=this.formbuilder.group({
   firstName : [''],
   lastName : [''],
   email : [''],
   mobile : [''],
   salary : ['']
   })
this.getALLEmployee();
   }
   postEmployeeDetails(){
    this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.mobile=this.formValue.value.mobile;
    this.employeeModelObj.salary=this.formValue.value.salary;
    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
    console.log(res);
    alert("employee added successfully");
    this.formValue.reset();
    this.getALLEmployee();
    },err=>{
    alert("something went wrong");
    }
    )
   }
getALLEmployee(){
  this.api.getALLEmployee()
 .subscribe(res=>{
this.employeeData=res;
    
    
  }
  )
}

deleteEmployee(row : any){
  this.api.deleteEmployee(row.id).subscribe(res=>{alert("Employee deleted");
  this.getALLEmployee(); })
}

onEdit(row : any){
  this.employeeModelObj.id=row.id;
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['salary'].setValue(row.salary);
  }

  updateEmployeeDetails(){
  this.employeeModelObj.firstName=this.formValue.value.firstName;
  this.employeeModelObj.lastName=this.formValue.value.lastName;
  this.employeeModelObj.email=this.formValue.value.email;
  this.employeeModelObj.mobile=this.formValue.value.mobile;
  this.employeeModelObj.salary=this.formValue.value.salary;
  this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
  .subscribe(res=>{
  alert("Update successfuly");
  this.getALLEmployee();
   })
  }

}



