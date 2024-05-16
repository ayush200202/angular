import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormGroup, FormControl,Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  

  reactiveForm:FormGroup
  formData:any=[]
  msg:any=""
  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    })
  }
  
  url="http://localhost:8000/"
  constructor(private httpClient:HttpClient){

  }
  formLogin() {
      console.log(this.reactiveForm)
      this.formData=this.reactiveForm.value
      console.log(this.formData)
      this.httpClient.get(this.url+"login",this.formData).subscribe({
        next:(data)=>{
          console.log(data)
          this.msg=data
        }
      })
    }

}
