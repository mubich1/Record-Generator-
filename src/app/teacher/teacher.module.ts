import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherFormComponent } from './teacher.form/teacher.form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';


@NgModule({
  declarations: [
    TeacherFormComponent,
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
  ]
})
export class TeacherModule { }
