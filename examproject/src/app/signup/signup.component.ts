import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormGroup, FormControl,Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  reactiveForm:FormGroup
  formData:any=[]
  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
  
      cname:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')])
      ,cmobile:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10}')])
      ,caddr:new FormControl(null,[Validators.required])
      ,cemail:new FormControl(null,[Validators.required])
      ,username:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')])
      ,password:new FormControl(null,[Validators.required])
  })
  }

  constructor(private httpClient:HttpClient){

  }
  url="http://localhost:8000/"
  formSignupSubmit() {
    this.formData=this.reactiveForm.value
    console.log(this.formData)
    this.httpClient.post(this.url+"addcustomer",this.formData).subscribe({
      next(res){
        console.log(res)
      }
    })
    }
}
