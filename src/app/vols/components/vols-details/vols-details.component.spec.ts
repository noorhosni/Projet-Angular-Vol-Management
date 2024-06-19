import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsDetailsComponent } from './vols-details.component';

describe('VolsDetailsComponent', () => {
  let component: VolsDetailsComponent;
  let fixture: ComponentFixture<VolsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolsDetailsComponent]
    });
    fixture = TestBed.createComponent(VolsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
