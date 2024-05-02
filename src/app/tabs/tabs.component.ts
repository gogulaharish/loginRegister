import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit {

  activeTab = 'login';
  isLoggedIn = false;
  status = '';

  constructor(private router: Router) { }

  activateTab(tabName: string) {
    this.activeTab = tabName;
  }

  ngOnInit() {
    

    if(this.isLoggedIn = localStorage.getItem('email') !== null){
      console.log(this.isLoggedIn);
      this.router.navigate(['/dashboard']);     
    }
    else{
       this.router.navigate(['/tabs']);

    }
    
  }


}