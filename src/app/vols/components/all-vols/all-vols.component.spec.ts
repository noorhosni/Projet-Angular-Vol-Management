import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVolsComponent } from './all-vols.component';

describe('AllVolsComponent', () => {
  let component: AllVolsComponent;
  let fixture: ComponentFixture<AllVolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllVolsComponent]
    });
    fixture = TestBed.createComponent(AllVolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
