import { Component, OnInit } from '@angular/core';
import { Tabs } from './models/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  activeTab = 'login';


  ngOnInit(): void {
  
  }

}
