import { Injectable } from '@angular/core';

import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  dbUrl = "http://localhost:3000/locations"

  

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.dbUrl)
    return await data.json()
  }
  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.dbUrl}/${id}`)
    return await data.json()
  }

  submitApplication(firstName: String, lastName: String, email: String) {
    console.log(firstName, lastName, email)
  }
}
