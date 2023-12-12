import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  template: `
  <section>
    <form>
    <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="searchLocation(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location 
      *ngFor="let housingLocation of filteredLocationList"
      [housingLocation]='housingLocation'>
    </app-housing-location>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)

  filteredLocationList: HousingLocation[] = []

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
    this.filteredLocationList = this.housingLocationList;
  }

  searchLocation(input: String) {
    if(!input) {
      this.filteredLocationList = this.housingLocationList 
      return
    } 
    
    this.filteredLocationList = this.housingLocationList.filter((location)=> location?.city.toLowerCase().includes(input.toLowerCase()))
  }

  
}
