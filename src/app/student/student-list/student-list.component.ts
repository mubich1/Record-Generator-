import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { studentForm } from '../../services/model';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'gender', 'phone', 'email', 'city', 'state', 'class', 'subjects', 'address', 'action'];
  dataSource = new MatTableDataSource<studentForm>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private route:Router,
              private dataService:DataService) { }

  ngOnInit(): void {
    this.getAllStudentRecord();
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  moveToStudentForm(){
    this.route.navigate(['student/student-form'])
  }
  moveToDashboard(){
    this.route.navigate(['/dashBoard'])
  }

  getAllStudentRecord(){
    this.dataService.getAllStudentRecord().subscribe((res:any) => {      
      this.dataSource.data = res.data
      this.dataSource.sort = this.sort;      
      this.dataSource.paginator = this.paginator;
    })
  }

  deleteStudentRecordByid(data:any){
    this.dataService.deleteStudentById(data._id).subscribe((res:any)=>{
      console.log(res);
      this.getAllStudentRecord()
      
    })
  }

  editStudent(data:any){
      this.route.navigate(['student/student-form'],{queryParams :{id:data._id}})
  }

  applyFilter(event: any) {
    let filterValue:any = event.target.value
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
}
