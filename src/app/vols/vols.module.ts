import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllVolsComponent } from './components/all-vols/all-vols.component';
import { VolsDetailsComponent } from './components/vols-details/vols-details.component';



@NgModule({
  declarations: [
    AllVolsComponent,
    VolsDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AllVolsComponent],
})
export class VolsModule { }
