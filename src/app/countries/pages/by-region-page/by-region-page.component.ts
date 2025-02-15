import { Component } from '@angular/core';
import {ServiceNameService} from '../../services/contries.service';
import {Country} from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public region: Country[] = []
  constructor( private ServiceNameService: ServiceNameService){}

  searchRegion(term:string) {
    this.ServiceNameService.searchRegion(term).subscribe( region => {
    this.region = region;
    })
  }
  
}
