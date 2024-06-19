import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmployeeComponent } from './gestion-employee.component';

describe('GestionEmployeeComponent', () => {
  let component: GestionEmployeeComponent;
  let fixture: ComponentFixture<GestionEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
