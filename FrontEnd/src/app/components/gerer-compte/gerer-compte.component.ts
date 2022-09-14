import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BddService } from 'src/app/services/bdd.service';
import { Person } from './person';


////

@Component({
  selector: 'app-gerer-compte',
  templateUrl: './gerer-compte.component.html',
  styleUrls: ['./gerer-compte.component.scss']
})
export class GererCompteComponent implements OnInit {

  page: number =1;

  //................................
  roleActuel: string = this.auth.utilisateur.role;

  fieldTextType: boolean = false;

  nb: any;
  
  tableau: any[] = [];
  persons: Person[] = [];
  hide = true;

  id1 :string= '';
  bu1: string = '';
  email1: string = '';
  name1: string = '';
  password1: string = '';
  role1: string = '';

  idActuel = 0;
  id :string= '';
  bu: string = '';
  email: string = '';
  name: string = '';
  password: string = '';
  role: string = '';

  expression = 'More details ↓';
  
  tableName = 'person';

  // httpClient
  constructor( private auth: AuthService, private bdd: BddService) {
   
   }
  //.........................
  ngOnInit() {
    this.nb = this.getNb();
    this.getPersons();
    this.bdd.setSectionTitle("Comptes");
    //console.log(this.persons);
    
  }
  //........................
  public getPersons()
  {
    this.bdd.getAll(this.tableName).subscribe(
      (response: Person[]) => {
        this.persons = response;
       //console.log(this.persons);
        },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //........................
  onAjouter() {   
    if (this.bu === "" || this.email === "" || this.name === "" || this.role === "" || this.password === "") { alert("Fields must not be empty !!") }
    else {
      let p:any={};
      p = { bu: this.bu, email: this.email, name: this.name, password: this.password, role: this.role }
      this.bu = this.email = this.name = this.password = this.role = '';//vider les input     
      
      this.bdd.addElement(this.tableName,p).subscribe(
        (reponse : Person)=>{
          this.getPersons();
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
      }
      );
    }   
  }
  //...........................
 
  public onSuppr(id : string) {

    this.bdd.delElement(this.tableName,id).subscribe(
      (response: void) => {        
        this.getPersons();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //...........................
  onCharger(i: number) {
    this.id1 = this.persons[i].id;
    this.bu1 = this.persons[i].bu;
    this.email1 = this.persons[i].email;
    this.name1 = this.persons[i].name;
    this.password1 = this.persons[i].password;
    this.role1 = this.persons[i].role;
    this.idActuel = i;
  }
  //..........................
  public onModifier(id : String):void {

    if (this.bu1 === "" || this.email1 === "" || this.name1 === "" || this.role1 === "" || this.password1 === "") { alert("Fields must not be empty !!") }
    else {
      if (this.persons[this.idActuel].name === 'superadmin' && this.persons[this.idActuel].role === 'superadmin') {
        alert("You can't modify or delete this compte");
      }
      else {
        let p:any={};
      p = { id:id,bu: this.bu1, email: this.email1, name: this.name1, password: this.password1, role: this.role1 }
        this.bdd.update(this.tableName,p).subscribe(
          (response: Person) => {            
            this.getPersons();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
    }
    
  }
  //.......................................
  onSupprimerTout() {
    this.bdd.deleteAll(this.tableName).subscribe(
      (response: void) => {        
        this.getPersons();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //.......................................
  getNb() {
    return this.persons.length;
  }
  //.......................................
  //switch hide/show password
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  expr() {
    if (this.expression === 'More details ↓') { this.expression = 'Less details ↑' }
    else { this.expression = 'More details ↓' }
  }
  //.......................................
  public searchPerson(key: string): void {
    //console.log(key);
    const results: Person[] = [];
    for (const person of this.persons) {
      if (person.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || person.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || person.role.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || person.bu.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
        results.push(person);
      }
    }
    this.persons = results;
    if (results.length === 0 || !key) {
      this.getPersons();
    }
  } 
  //.......................................

}