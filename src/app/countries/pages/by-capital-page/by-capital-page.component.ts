import { Component, EventEmitter, Output } from '@angular/core';
import {ServiceNameService} from '../../services/contries.service';
import {Country} from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public Countries: Country[] = []
  constructor(private ServiceNameService :ServiceNameService){
  }
  // create event emitter

  searchByCapital(term : string) : void {
    this.ServiceNameService.searchCapital(term).subscribe( country  => {
  this.Countries = country;
    console.log(this.Countries);
 
    })
  }
}
