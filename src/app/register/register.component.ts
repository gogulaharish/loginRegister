import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  @Output() registrationSuccess: EventEmitter<void> = new EventEmitter<void>();
registerForm: FormGroup;
submitted= false;
errorMessage = ''

  constructor(private formBuilder: FormBuilder,private  _authService: AuthService, private router: Router){
    this.registerForm= this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
      
    })

  }

  get f() { 
    return this.registerForm.controls; 
  }

  ngOnInit(): void {
    
  }

  register(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    this._authService.register(this.registerForm.value).subscribe(
      res=>{
        alert('Registration Successful');
        this.registrationSuccess.emit();
        this.router.navigate(['/tabs']);
      },error=>{
        console.error('Registration failed:', error);
      });
  }

}
