import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class DataService {

    constructor(private requestService:RequestService){}

    careateNewUserRecord(user:any): Observable<any> {
        return this.requestService.addData(`${environment.ApiBaseUrl}/teacher/createUser`,user)
    }

    getUserRecords():Observable<any> {
        return this.requestService.getData(`${environment.ApiBaseUrl}/teacher/userRecord`)
    }

    removeRecord(id:any):Observable<any> {
        return this.requestService.deleteData(`${environment.ApiBaseUrl}/teacher/removeuser/${id}`)
    }

    updateRecord(id:any,object:any):Observable<any>{
        return this.requestService.updateData(`${environment.ApiBaseUrl}/teacher/update/${id}`,object)
    }
    getUserRecordById(id:any):Observable<any>{
        return this.requestService.getData(`${environment.ApiBaseUrl}/teacher/getById/${id}`)
    }
    
    addNewStudent(student:any):Observable<any>{
        return this.requestService.addData(`${environment.ApiBaseUrl}/student/createStudent`,student)
    }

    getAllStudentRecord():Observable<any>{
        return this.requestService.getData(`${environment.ApiBaseUrl}/student/getStudent`)
    }

    deleteStudentById(id:any){
        return this.requestService.deleteData(`${environment.ApiBaseUrl}/student/deleteStudentbybid/${id}`)
    }

    getStudentById(id:any){
        return this.requestService.getData(`${environment.ApiBaseUrl}/student/getStudentId/${id}`)
    }

    updateStudentById(id:any,object:any){
        return this.requestService.updateData(`${environment.ApiBaseUrl}/student/updateStudentById/${id}`,object)
    }

    createNewAccount(obj:any){
        return this.requestService.addData(`${environment.ApiBaseUrl}/signup/createAccount`,obj)
    }

}