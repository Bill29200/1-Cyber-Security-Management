import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BddService } from '../bdd.service';
import { Person } from 'src/app/components/gerer-compte/person';
//import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public persons!: Person[];
  utilisateur!: Person;

  /*user: string = '';
  role: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  bu: string = '';*/
  urlbase = this.bdd.url;
  url: string = this.urlbase + 'person/get';
  constructor(private router: Router, private bdd: BddService) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  ////////////////////////////////////////////////////////////////////////////////
  login(email: string, password: string) {
    return (this.search(email, password))
  }
  ///////////////////////////////////////////////////////////////////////////////////////
  search(email: string, password: string) {
   
    this.bdd.getByEmail('person',email).subscribe(
      (response: Person) => {
        this.utilisateur = response;
        if (this.utilisateur.password===password) {this.router.navigate(['/user']);}
        else {
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        }
        //................
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    return this.utilisateur;
    }
   
}
