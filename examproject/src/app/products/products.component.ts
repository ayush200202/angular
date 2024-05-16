import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormGroup, FormControl,Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  mydata:any
  url="http://localhost:8000/"
  constructor(private httpClient:HttpClient){

  }
  getProduct(){
    this.httpClient.get(this.url+"products").subscribe({
      next:(data)=>{
        this.mydata=data
      }
    })
  }


}
