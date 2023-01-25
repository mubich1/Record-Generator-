import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { employeeForm } from '../../services/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  record:any[]=[]
  employeeModel = new employeeForm

  constructor(private dataService:DataService,private route:Router) { }

  ngOnInit(): void {
    this.getUserRecord()
  }
  removeRecord(id:any){
    const user = id._id
    this.dataService.removeRecord(user).subscribe((res:any)=>{
      this.getUserRecord()
    })
  }
  getUserRecord(){
    this.dataService.getUserRecords().subscribe((res:any)=>{      
      this.record = res.data      
    })    
  }
  
  editData(data:any){
    this.route.navigate(['teacher/teacher-form'],{queryParams : {id:data._id }});
  }

  printProfile(id:any){
    this.route.navigate(['/print'],{queryParams:{id : id._id}})
  }
  addBtn(){
    this.route.navigate(['teacher/teacher-form'])
  }
  dashBtn(){
    this.route.navigate(['/dashBoard'])
  }

}
