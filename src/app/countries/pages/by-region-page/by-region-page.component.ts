import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  public countries:Country[] = [];
  public regions:Region[] = ['America','Asia','Europe','Africa','Oceania'];
  public selectedRegion?: Region;

  public termBack:string = "";
  
  constructor( private countriesService:CountriesService ){

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    const valor = this.countriesService.cacheStore.byRegion.region;
    if(valor!==''){
      this.termBack = this.countriesService.cacheStore.byRegion.region;
      // console.log("hola ", this.termBack);
    }

  }

  searchByRegion(term:Region | string){
    this.countriesService.searchRegion(term)
    .subscribe(countries => {
      this.countries = countries;
    })
  }
}
