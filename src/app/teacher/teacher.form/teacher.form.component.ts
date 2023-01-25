import { Component, OnInit } from '@angular/core';
import { employeeForm } from '../../services/model';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher.form',
  templateUrl: './teacher.form.component.html',
  styleUrls: ['./teacher.form.component.scss']
})
export class TeacherFormComponent implements OnInit {
 employeeModel = new employeeForm
 record:any[]=[]
 dataId:any
  constructor(private dataService:DataService,
              private route: Router,
              private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((res:any) =>{
      this.dataId = res.id
      if(res.id){
        this.dataService.getUserRecordById(res.id).subscribe((res:any)=>{
          this.employeeModel = res.data
          console.log('this.employeeModel : ', this.employeeModel );
          
        })
      }
    })
    
  }
  submitForm(form:any){
    // if(form.invalid){
    if(!this.dataId){
        this.dataService.careateNewUserRecord(form).subscribe((res:any)=>{
        this.route.navigate(['teacher/teacher-list'])
        console.log("teacher list");
        
      this.employeeModel = new employeeForm
    })  
    } else{
      this.dataService.updateRecord(this.dataId,form).subscribe((res:any)=>{
      this.employeeModel = new employeeForm;
      this.route.navigate(['teacher/teacher-list'])
      })
    }

  // }
  }


}
