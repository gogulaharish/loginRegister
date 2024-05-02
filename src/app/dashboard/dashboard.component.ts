import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  selected= '';
  cars:any= [{}];

  public pieChartLabels:string[] = ['Chrome', 'Safari', 'Firefox','Internet Explorer','Other'];
  // public pieChartData:number[] = [40, 20, 20 , 10,10];
  // public pieChartType:any = 'pie';



  constructor(private router:Router,private userService:UserService){}
  ngOnInit(){
    // this.userService.getCarList().subscribe(
    //   res=>{
    //     this.cars=res;
    //     console.log(this.cars);
    //   }
    // )
    this.openPieChart();
  }
      
  logOut(){
    sessionStorage.clear();
    this.router.navigate(['/tabs']);
  }

  openPieChart(){
    // const ctx = (document.getElementById('pieChart') as HTMLCanvasElement).getContext('2d');
    const pieChart = new Chart("pieChart", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'My First Dataset',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'red',
            'blue',
            'yellow',
            'green',
            'purple',
            'orange'
          ]
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Sample Pie Chart'
          }
        }
      }
    });
  }
  

}
