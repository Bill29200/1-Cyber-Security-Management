
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from 'src/app/services/auth/auth.service';
import { BddService } from 'src/app/services/bdd.service';
import { Person } from '../gerer-compte/person';
import { Model } from '../gerer-modele/model';
import { dateModel, TestModel } from './testModel';


@Component({
  selector: 'app-tester-modeles',
  templateUrl: './tester-modeles.component.html',
  styleUrls: ['./tester-modeles.component.scss']
})
export class TesterModelesComponent implements OnInit {
 
  //tmpDate!:NgbDateStruct;
  tmpDate!:Date;
  selectDate!:dateModel;
  //.............................................................................
  
  model!: Model;
  //testDate!: NgbDateStruct;
  testDate!: Date;
  user: Person= this.auth.utilisateur;
  test:any;
  //.............................................................................
    
  cpt:number =0;
  lig :number=0;
 
  //dates:NgbDateStruct[]=[];
  dates:Date[]=[];

  page :number=1;
  
  models : Model[]=[];
  testmodels : TestModel[]=[];
 
  selectModel:string='';
  selectType:string='';
  role=this.auth.utilisateur.role;
  nameUser= this.auth.utilisateur.name;
  utilisateur = this.auth.utilisateur;
  //....................................
  constructor(private bdd: BddService, private auth:AuthService, private httpClient: HttpClient) {   
  }  
  //....................................
  ngOnInit(): void {
    this.getTestModels();
    this.getModels();
    this.role=this.auth.utilisateur.role;
    this.selectType ="";
    this.dates=[];
       
  }
  //....................................
  public getModels() {
    this.bdd.getAll('model').subscribe(
      (response: Model[]) => {
        this.models = response;
       // console.log(this.models);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //.....................................
  //....................................
  public getTestModels() {
    this.bdd.getAll('testModel').subscribe(
      (response: TestModel[]) => {
        this.testmodels = response;
       // console.log(this.models);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //....................................
  onSelectDate(){
 
      let tmp= this.selectDate.year+'-'+this.selectDate.month+'-'+this.selectDate.day;
      let tmpDate = new Date(tmp)      ;
      if (! this.dates.includes(tmpDate)){this.dates.push(tmpDate);}
     }
  //................................
  nbrDate(){
   return this.dates.length;
  }
  //.............................
  onDeleteDate(i:number){
   this.dates.splice(i, 1);
  }
  //.............................
   getElementModel(){
    return this.selectModel;
  }
  //....................
  testModel(m:string){
    alert("Testing..."+this.model.name);
  }
  //...........................
  onNext()
  {
    let nbpage = this.dates.length / 6;
   if (this.page<nbpage)this.page++;
  }
  //..........
  onPrevious()
  {
    if (this.page>=2)this.page--;
  }
  //----------------
  InitSelectModel(){
    this.selectModel='';
  }
  //..................
  public addTestModel(){      
     
      this.models.forEach(model => {
        if (model.name===this.selectModel){ this.model = model;}
      });    
             
      let datenow = new Date();
      datenow = new Date(datenow.getFullYear(), datenow.getMonth(), datenow.getDate(), datenow.getHours(), datenow.getMinutes(), datenow.getSeconds());
      
      this.testDate= datenow;
      if (this.selectType==='GLOBAL'){
         this.test={
          dates:this.dates,
          testType : this.selectType,
          model: {},
          testDate : datenow,
          user: this.utilisateur
        }
      }
     else {
       this.test={
            dates:this.dates,
            testType : this.selectType,
            model: this.model,
            testDate : datenow,
            user: this.utilisateur
          }
     }
       
      
      this.bdd.addElement('testModel',this.test).subscribe(
        (response:TestModel)=>{
           this.test = response;
          },
          (error:HttpErrorResponse)=>
          {alert(error.message);}
      );

      this.dates=[];
      this.selectType='';
          
    }
  //...........................
  loadModel(i:number){
    this.model=this.models[i];
   // console.log(this.model);
    
  }
  //............................
  }
