import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { DataService } from '../../services/data.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  ageArray: any[] = [...Array(100).keys()]
  todo: boolean = false
  id: any
  public studentForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: [null, Validators.required],
    phone: [null, Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    address: ['', Validators.required],
    class: ['', Validators.required],
    subjects: ['', Validators.required],
  })
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private route: Router,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getStudentRecord()
  }
  get studentFormControls() {
    return this.studentForm.controls
  }

  getStudentRecord() {
    this.router.queryParams.subscribe((res: any) => {
      this.dataService.getStudentById(res.id).subscribe((res: any) => {
        console.log(res.data)
        this.id = res.data._id
        if (res.data) {
          this.todo = true
          this.studentForm.patchValue(res.data);
        }
      })
    })
  }

  submit() {
    if (this.todo) {
      if (this.studentForm.valid) {
        this.dataService
          .updateStudentById(this.id, this.studentForm.value)
          .subscribe((res: any) => {
            this.route.navigate(['student/student-list'])
          })
      }
    } else {
      if (this.studentForm.valid) {
        this.dataService
          .addNewStudent(this.studentForm.value)
          .subscribe((res: any) => {
            this.route.navigate(['student/student-list'])
          })
      }
    }
  }

  backToList(){
    this.route.navigate(['student/student-list'])
  }
}
