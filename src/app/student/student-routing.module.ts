import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes:Routes =[
    {
        path: '',
        redirectTo: 'student-list',
        pathMatch: 'full'
    },
    {
        path: 'student-form',
        component: StudentFormComponent
    },
    {
        path: 'student-list',
        component: StudentListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule{  }