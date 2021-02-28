import { Component, OnInit } from '@angular/core';
import { StartchatService } from './startchat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private list: StartchatService) { }
  title = 'StartChatWeb';

  ngOnInit(): void {
   this.list.getCountryList();
  }

}
