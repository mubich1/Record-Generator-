import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintProfileComponent } from './services/component/print-profile/print-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [

  {
    path: '',
    redirectTo : 'login',
    pathMatch: 'full'
  },
  {
    path : 'teacher',
    loadChildren:() => import(`./teacher/teacher.module`).then((m) => m.TeacherModule)
  },
  {
    path: 'student',
    loadChildren:() => import(`./student/student.module`).then((m) => m.StudentModule)
  },
  {
    path: 'login',
    loadChildren:()=>import(`./login/login.module`).then((m) => m.LoginModule)
  },
  {
    path: 'print',
    component: PrintProfileComponent
  },
  {
    path: 'print/:id',
    component: PrintProfileComponent
  },
  {
    path: 'dashBoard',
    component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
