import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles:[
    `
    img {
      width: 50px
    }
    `
  ]
})
export class CountryTableComponent{
  
  @Input()
  public countriesList: Country[] = [];

  
}