import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbar="non-navbar"
  mouseFlag=false
  onMouseOver(){
    this.mouseFlag=true
    this.navbar="navbar"
  } 
  onMouseOut(){
    this.mouseFlag=false
    this.navbar="non-navbar"
  }
}
