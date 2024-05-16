import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormGroup, FormControl,Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient,HttpClientModule,HttpParams } from '@angular/common/http';
import { ActivatedRoute, RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent {
  mydata:any
  url="http://localhost:8000/"
  constructor(private httpClient:HttpClient,private route: ActivatedRoute){
    
  }
  decodedId:any

  ngOnInit() {
    
    const idParam = this.route.snapshot.paramMap.get('pid');
    this.decodedId = decodeURIComponent(idParam);

    console.log(this.decodedId);
    this.getProduct()
  }
  getProduct(){
    this.httpClient.get(this.url+"productsbyid",{
      params:new HttpParams().set("pid",this.decodedId)
    }).subscribe({
      next:(data)=>{
        this.mydata=data
      }
    })
  }

  
}
