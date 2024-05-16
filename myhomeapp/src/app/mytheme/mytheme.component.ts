import { Component } from '@angular/core';

@Component({
  selector: 'app-mytheme',
  standalone: true,
  imports: [],
  templateUrl: './mytheme.component.html',
  styleUrl: './mytheme.component.css'
})
export class MythemeComponent {
  color = undefined
  changeBackground(event : any){
    this.color=event.target.value
  }
}
