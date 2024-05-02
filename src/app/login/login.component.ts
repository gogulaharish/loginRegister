import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeTab = 'login';
  loginForm : FormGroup;
  hide =true;
  submitted = false;

  constructor(
    private formBuilder:FormBuilder, 
    private authService: AuthService,
    private router:Router
    ){

    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
      
    });

  }

  get f() { 
    return this.loginForm.controls; 
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  login(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
    const {email,password} = this.loginForm.value;
    this.authService.login(email as string).subscribe(
      res=>{
        if(res.length>0 && res[0].password === password){
          sessionStorage.setItem('email', email as string);
          this.router.navigate(['/dashboard']);
        }
        else{
          console.error('Username or password is incorrect');
        }
      },error =>{
        console.error('something went wrong:', error);
      }
    )

  }

}
