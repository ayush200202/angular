import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MythemeComponent } from './mytheme/mytheme.component';
import { HomlistComponent } from './homlist/homlist.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ContactusComponent } from './contactus/contactus.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,SearchComponent,ContactusComponent,FilterComponent, RouterOutlet,HomeComponent,MythemeComponent,HomlistComponent,AboutusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myhomeapp';
}
