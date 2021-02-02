import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SearchFieldCountryComponent } from './search-field/search-field-country/search-field-country.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFieldComponent,
    SearchFieldCountryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
