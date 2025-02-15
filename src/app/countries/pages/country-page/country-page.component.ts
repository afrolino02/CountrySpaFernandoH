import { Component, OnInit } from '@angular/core';
import {Country} from '../../interfaces/country';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceNameService} from '../../services/contries.service';
import {switchMap} from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
    public country?: Country ;
  constructor( private Router :Router,public activatedRoute: ActivatedRoute, private ServiceNameService: ServiceNameService){}
  ngOnInit(): void {
  
    this.activatedRoute.params
       .pipe(
          switchMap( ({id}) =>  this.ServiceNameService.searchCapitalByAlphaCode(id) ),
        )
      .subscribe( countries => {

        if(!countries){
         return this.Router.navigateByUrl('')
        }
        return this.country = countries
       
      })
  }
}
