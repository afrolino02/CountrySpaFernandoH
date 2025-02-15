import { Component } from '@angular/core';
import {ServiceNameService} from '../../services/contries.service';
import {Country} from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  constructor( private ServiceNameService : ServiceNameService){}
  searchByCountry(term: string) {
    this.ServiceNameService.searchCountry(term).subscribe( Countries => {
      this.countries = Countries;

      
    });
  }
}

