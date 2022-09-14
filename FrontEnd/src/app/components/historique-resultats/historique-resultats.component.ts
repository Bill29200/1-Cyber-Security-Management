import { Component, OnInit } from '@angular/core';
import { BddService } from 'src/app/services/bdd.service';

@Component({
  selector: 'app-historique-resultats',
  templateUrl: './historique-resultats.component.html',
  styleUrls: ['./historique-resultats.component.scss']
})
export class HistoriqueResultatsComponent implements OnInit {

  constructor(private bdd:BddService) { }
  tableau:any[]=[];
  url:string = 'http://localhost:8080/api/'
  urlb:string = 'https://csp29-2a943-default-rtdb.firebaseio.com/';

  ngOnInit(): void {
    this.loadTable();
  }
  //...................
  loadTable(){    
    this.tableau = this.bdd.getTable(this.url);
    console.log(this.tableau);
  }
  //.............
  AddElement(){
    let p: any = {};
    p.element = "element"+Math.floor(Math.random() * 100);  // remplissage de l'element 
    this.bdd.addElement(this.url,p); // appel du service  
    this.tableau.push(p);//
  }
  //.............
  delElement(i:number,tableName:string){
  //  let url2 = this.urlb+tableName+'/'+this.tableau[i].id+'.json';
  //  this.bdd.delElement(url2,i);
  //  this.tableau.splice(i,1);
  }
  //...............
  getNb()
  {
    return this.tableau.length;
  }
  //...............
  delAll(){
    this.bdd.delAll(this.url);
    this.tableau.splice(0, this.tableau.length);
  }
  //......................
  UpdateElement(i:number,tableName:string){
    let url2 = this.urlb+tableName+'/'+this.tableau[i].id+'.json';
    let p = this.tableau[i];// recuperation de l'element
    p.element = "element"+Math.floor(Math.random() * 100); // update it
   // this.bdd.updateTable(url2,p);
    this.tableau[i] =p;// update locale table    
  }
 }


