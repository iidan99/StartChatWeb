import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SearchFieldCountryComponent } from './search-field/search-field-country/search-field-country.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { VideoComponent } from './video/video.component';
import { BottomDownloadComponent } from './bottom-download/bottom-download.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFieldComponent,
    SearchFieldCountryComponent,
    HowitworkComponent,
    VideoComponent,
    BottomDownloadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
