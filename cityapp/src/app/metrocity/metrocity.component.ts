import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-metrocity',
  standalone: true,
  imports: [],
  templateUrl: './metrocity.component.html',
  styleUrl: './metrocity.component.css'
})

export class MetrocityComponent implements OnInit {
  metroCities = [
    { name: 'New York', icon: '🗽' },
    { name: 'Tokyo', icon: '🗼' },
    { name: 'London', icon: '🏰' },
    // Add more cities as needed
  ];

  selectedCity: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCity(city: string): void {
    this.selectedCity = city;
  }
}