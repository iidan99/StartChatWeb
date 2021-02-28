import { Injectable } from '@angular/core';
import { country } from './interface/country_interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartchatService {
 public countryList: country[];

  constructor(private http: HttpClient) { }

  getCountryList(){
    return this.http.get<country[]>("assets/country.json").subscribe(result =>
      this.countryList = result);
  }

  startChat(phoneNumber: number, areaCode: string){
     window.open("https://api.whatsapp.com/send?phone="+ areaCode + phoneNumber);
  }
}
