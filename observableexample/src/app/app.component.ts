import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'observableexample';
  data:any[]=[]

  //Create Observale
  myObservale=new Observable((observer)=>{
    // setTimeout(() => {
      observer.next(10)
    // }, 1000);
    setTimeout(() => {
      observer.next(20)
    }, 2000);
    setTimeout(() => {
      observer.next(30)
    }, 3000);
    setTimeout(() => {
      observer.next(40)
    }, 4000);
    setTimeout(() => {
      observer.next(50)
    }, 5000);
    
    
  })
  getAsyncData() {
    this.myObservale.subscribe({
      next:(val:any)=>{
        console.log(val)
        this.data.push(val)
      }
    })
  }

}
