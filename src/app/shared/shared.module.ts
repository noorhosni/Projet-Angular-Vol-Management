import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, 
    BrowserModule, 
    RouterModule,
    HttpClientModule,
    HttpClientModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
