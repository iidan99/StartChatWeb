import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
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
  binding:string;
  error: boolean;
  private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
  constructor(private chat: StartchatService) { }
  @ViewChild('insideElement', { static: false }) insideElement;

  ngOnInit(): void {
    this.onDocumentClick = this.onDocumentClick.bind(this);
    document.addEventListener('click', this.onDocumentClick);
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
    if(this.binding!== undefined){
    this.binding = this.binding.replace("-", "");
    }
    console.log(this.binding)
    if(this.binding === undefined || this.binding === null || this.binding.toString().length < 7 ||!this.binding.match(this.regex)){
    this.error = true;
    }
    else{
      this.chat.startChat(Number(this.binding), this.areacode);
      this.error =false;
    }
  }

  onclickOutside(){
    console.log("hello");
    this.areaCodePopup = false;
  }

  protected onDocumentClick(event: MouseEvent) {
    if(this.areaCodePopup){
      if (this.insideElement.nativeElement.contains(event.target)) {
        return;
      }
      this.areaCodePopup = false;
    }
  }
}
