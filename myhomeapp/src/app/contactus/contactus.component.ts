import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormGroup, FormControl,Validators, FormArray} from '@angular/forms';
import { CustomValidators } from '../Validators/nospace.validator';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
  providers:[ApiService]
})
export class ContactusComponent implements OnInit {

  reactiveFormDelete:FormGroup
  reactiveForm:FormGroup
  formData:any=[]
  formData2:any=[]
  constructor(private api:ApiService){

  }

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      firstname:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*'),CustomValidators.noSpaceValidator]),
      lastname:new FormControl(null,Validators.required),
      username:new FormControl(null),
      email:new FormControl("enter email"),
      address:new FormGroup({
        street : new FormControl(null,Validators.required),
        country:new FormControl("India",Validators.required),
        city:new FormControl(null),
        region:new FormControl(null),
        zipcode:new FormControl(null,Validators.required)
        
      })
      
    })
    this.reactiveFormDelete=new FormGroup({
      email:new FormControl(null)
    })
  }
  formDataSubmit() {
    //this.api.getData()
      console.log(this.reactiveForm)
    //   this.formData = this.reactiveForm.value
    //   this.reactiveForm.reset({
    //     firstname:null,
    //     lastname:null,
    //     email:null,
    //     username:null,
    //     address:{
    //       street:null,
    //       country:'India',
    //       city:null,
    //       region:null,
    //       zipcode:null
    //     }
    //   })

    this.formData=this.reactiveForm.value
    this.api.registerUser(this.formData)

    }
    formDeleteSubmit() {
      this.formData2=this.reactiveFormDelete.value
      console.log(this.formData2)
      this.api.deleteUser(this.formData2)
    }
}
