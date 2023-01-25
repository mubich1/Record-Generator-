import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-print-profile',
  templateUrl: './print-profile.component.html',
  styleUrls: ['./print-profile.component.scss']
})
export class PrintProfileComponent implements OnInit {
  formData:any;
  download:any
  constructor(private router:ActivatedRoute,
              private dataService:DataService,
              private route:Router) { }

  ngOnInit(): void {
  this.getData()
  }
  
  getData(){
    this.router.queryParams.subscribe((res:any) =>{
      this.dataService.getUserRecordById(res.id).subscribe((res:any) =>{
        console.log(res.data);
        
        this.formData = res.data
      })
      
    })
  }

  printPage(){
    const a =window.print()
    console.log(a);
    
  }

  backBtn(){
    this.route.navigate(['/employee-list'])
  }

}
