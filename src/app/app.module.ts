import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { RequestService } from './services/request.service';
import {  HttpClientModule } from '@angular/common/http';
import { PrintProfileComponent } from './services/component/print-profile/print-profile.component';
import { TeacherModule } from './teacher/teacher.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PrintProfileComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TeacherModule,
    CommonModule,
    BrowserAnimationsModule
      
  ],
  providers: [DataService,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
