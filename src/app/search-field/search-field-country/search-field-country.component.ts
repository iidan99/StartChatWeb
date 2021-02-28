import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { country } from "../../interface/country_interface";
import { StartchatService } from "../../startchat.service";

@Component({
  selector: 'app-search-field-country',
  templateUrl: './search-field-country.component.html',
  styleUrls: ['./search-field-country.component.css']
})
export class SearchFieldCountryComponent implements OnInit {

  constructor(private list: StartchatService) { }
  @Output() onSelectAreaCode = new EventEmitter<country>();
  countryList: country[] = this.list.countryList;
  arr: country[];
  ngOnInit(): void {
    this.countryList = this.countryList.sort((a,b) => a.dial_code.localeCompare(b.dial_code));;
  }

  onSelect(item: country){
    console.log(this.countryList);
    this.onSelectAreaCode.emit(item);
  }
}
