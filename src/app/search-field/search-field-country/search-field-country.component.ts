import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { country } from "../../interface/country_interface";

@Component({
  selector: 'app-search-field-country',
  templateUrl: './search-field-country.component.html',
  styleUrls: ['./search-field-country.component.css']
})
export class SearchFieldCountryComponent implements OnInit {

  constructor(private http: HttpClient) { }
  @Output() onSelectAreaCode = new EventEmitter<country>();
  countryList: country[];
  arr: country[];
  ngOnInit(): void {
  this.getCountryList();
  }

  getCountryList(){
    return this.http.get<country[]>("assets/country.json").subscribe(result =>
      this.countryList = result);
  }
  onSelect(item: country){
    this.countryList = this.countryList.sort((a,b) => a.dial_code.localeCompare(b.dial_code));
    console.log(this.countryList);
    this.onSelectAreaCode.emit(item);
  }
}
