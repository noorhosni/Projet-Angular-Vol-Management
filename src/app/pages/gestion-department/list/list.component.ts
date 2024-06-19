import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  form: any;
  submitted: boolean=false;
  public departments: any[] = [];

  constructor(private fb : FormBuilder ,private depService: DepartmentService) {}

  ngOnInit(): void {
    this.loadListDepartments();
    this.form = this.fb.group({
      departmentName: ['', Validators.required]
      });
  }

  loadListDepartments(): void {
    this.depService.getListDepartments().subscribe(
      data => {
        this.departments.push(...data);
      },
      err => {
        console.log(err);
      }
    );
  }
  onSubmit(): void {
    const departmentName = this.form.value.departmentName;
    this.depService.postDepartments({ departmentName })
    .subscribe((newDepartment) => {
    this.depService.getListDepartments().subscribe((data) => {
    this.departments = data; });
    }, (error) => {
    });
    }
}
