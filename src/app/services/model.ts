export class employeeForm {
    id:any
    name: string = ''
    age:number = 0
    gender:string= ''
    phone : number = 0
    email : any
    dob:any
    city:string=''
}

export interface studentForm {
    id:any
    firstName: string 
    lastName: string
    age:number 
    gender:string
    phone : number 
    email : any
    city:string
    state:string
    class:string
    subjects:string
    address:string
}

export class LoginForm {
    email:string = ''
    password:string = ''
}

export class SignUpForm {
    name?:string = ''
    email?:string = ''
    phone?:any
    password?:string = ''
    confirmPassword?:string = ''
}

