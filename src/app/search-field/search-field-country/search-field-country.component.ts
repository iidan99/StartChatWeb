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
  countryList: country;
  ngOnInit(): void {
    console.log(this.getCountryList());
  }

  getCountryList(){
    return this.http.get<country>("assets/country.json").subscribe(result =>
      this.countryList = result);
  }
  onSelect(item: country){
    this.onSelectAreaCode.emit(item);
  }
}
