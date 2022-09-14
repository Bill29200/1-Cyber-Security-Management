import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
// import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  email:string='';
  password:string='';
  txt:string='';
  
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {    
    this.password=this.email='';     
  }
  onLogin(email:string, password:string){
    if (email!==''&& password!=='') {
      this.txt='';
      this.auth.login(email,password);
      if (this.auth.login(email,password)) {this.txt=''}
      else {this.txt='No user with these login elements'}
    } else {
      this.txt='Password or email empty!!';
    }
  }
}
