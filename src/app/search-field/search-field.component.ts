import { Component, OnInit, NgModule } from '@angular/core';
import { country } from '../interface/country_interface';
import { StartchatService } from '../startchat.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
  areaCodePopup: boolean = false;
  areacode: string = "+972";
  countryFlag: String = "https://restcountries.eu/data/isr.svg";
  binding:number;
  constructor(private chat: StartchatService) { }

  ngOnInit(): void {
  }

  openPopup(){
    this.areaCodePopup = true;
  }
  onChangeAreaCode(item: country){
    this.areacode = item.dial_code;
    this.countryFlag = item.flag;
    this.areaCodePopup =false;
  }
  onSubmited(){
    this.chat.startChat(this.binding, this.areacode);
  }
}
