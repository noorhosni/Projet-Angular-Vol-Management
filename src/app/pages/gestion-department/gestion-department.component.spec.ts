import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDepartmentComponent } from './gestion-department.component';

describe('GestionDepartmentComponent', () => {
  let component: GestionDepartmentComponent;
  let fixture: ComponentFixture<GestionDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
