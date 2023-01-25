import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherFormComponent } from './teacher.form/teacher.form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
      {path:'',redirectTo:'teacher-list', pathMatch: 'full'},
      {path:'teacher-form',component:TeacherFormComponent},
      {path:'teacher-list', component:TeacherListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
