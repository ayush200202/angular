import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private httpclient:HttpClient){

  }
  url="http://localhost:8000/"
  mydata:any
  getData(){
    this.httpclient.get(this.url+'getData').subscribe({
      next:(data)=>{
        console.log(data)
        this.mydata=data
      }
    })
  }

}
