import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements AfterViewInit{

  title = ''


  constructor(private router:Router){

  }
  ngAfterViewInit(): void {
// console.log(sessionStorage.getItem('email'));
  }


}
