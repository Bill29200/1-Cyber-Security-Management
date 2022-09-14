import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

import { BddService } from 'src/app/services/bdd.service';
import { Algo } from './algo';

@Component({
  selector: 'app-algorithme',
  templateUrl: './algorithme.component.html',
  styleUrls: ['./algorithme.component.scss']
})
export class AlgorithmeComponent implements OnInit{
  role:string= this.auth.utilisateur.role; 
  pagec1:number=1; pagec2:number=1; pagec3:number=1; 
  selectAlgo: any;
  tableName :string='algorithme';
  //algorithmes : Algo[] = [];
  algorithmesC : Algo[] = [];

  tablAlgoC1: Algo[] = [];
  tablAlgoC2: Algo[] = [];
  tablAlgoC3: Algo[] = [];

  layer1='Log_prediction';
  layer2='Anomaly_detection';
  layer3='Attack_classification';
  nomAlgo:string=''; 
  couche:string='';
  ExisteInC1:boolean=false;ExisteInC2:boolean=false;ExisteInC3:boolean=false;  
  nomAlgo1:string=''; 
  couche1:string='';

  ExisteInC11:boolean=false;ExisteInC21:boolean=false;ExisteInC31:boolean=false;
  constructor(private auth: AuthService, private httpClient: HttpClient, private bdd:BddService) { }
 ngOnInit(){
    this.getAlgorithmes();
    //console.log(this.algorithmes);
}
 //..................................
 public getAlgorithmes()
  {    
    //..
    this.bdd.getByLayer(this.tableName,this.layer1).subscribe(
      (response: Algo[]) => { this.tablAlgoC1 = response; },
      (error: HttpErrorResponse) => { alert(error.message);   }
    );
    //..
    this.bdd.getByLayer(this.tableName,this.layer2).subscribe(
      (response: Algo[]) => {this.tablAlgoC2 = response;},
      (error: HttpErrorResponse) => { alert(error.message); }
    );
    //..
    this.bdd.getByLayer(this.tableName,this.layer3).subscribe(
      (response: Algo[]) => { this.tablAlgoC3 = response; },
      (error: HttpErrorResponse) => { alert(error.message);}
    );
    //..
  }
 //..................................
 initAdd()
 {
  this.ExisteInC1=this.ExisteInC2=this.ExisteInC3=false;
  this.nomAlgo="";

 }
 //...................................
onAjouterAlgo() {
  // post
  if (this.nomAlgo==='') {alert("Algorithme Name must not be empty !!")}
  else if (!this.ExisteInC1&&!this.ExisteInC2&&!this.ExisteInC3)
  {
    alert("You didn't choose any layer !!");
  } else{
    let p: any = {};
    p.name= this.nomAlgo;
    //.......
    if(this.ExisteInC1){
       p.layer=this.layer1;
       this.bdd.addElement(this.tableName,p).subscribe(
        (reponse : Algo)=>{
          this.getAlgorithmes();
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
      })
//        this.tablAlgoC1.push(p);
      }
    //.......
    if(this.ExisteInC2){
      p.layer=this.layer2;
         this.bdd.addElement(this.tableName,p).subscribe(
         (reponse : Algo)=>{
           this.getAlgorithmes();
         },
         (error:HttpErrorResponse)=>{
           alert(error.message);
       })
       } 
    //........
    if(this.ExisteInC3){
       p.layer=this.layer3;
       this.bdd.addElement(this.tableName,p).subscribe(
        (reponse : Algo)=>{
          this.getAlgorithmes();
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
      })
      }
  }
}
//........................................
onEnleverAlgo(p: Algo) {
  //console.log(p.id);
  this.bdd.delElement(this.tableName,p.id).subscribe(
    (response: void) => {        
      this.getAlgorithmes();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  
 }
/////////////////////////////////////////
onSupprimerAll(){
  this.bdd.deleteAll(this.tableName).subscribe(
    (response: void) => {        
      this.getAlgorithmes();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );    
}
/////////////////////////////////////////

onSupprimerToutAlgo(couche:number)
{
  
}

getNbAlgo(couche:number)
{
  let nbr =0;
  if (couche===1){nbr= this.tablAlgoC1.length}
  if (couche===2){nbr= this.tablAlgoC2.length}
  if (couche===3){nbr= this.tablAlgoC3.length}
  return nbr;
 }
  //.......................................
   public search(key: string) {
    
   //console.log(key);
   const results1: Algo[] = [];
   const results2: Algo[] = [];
   const results3: Algo[] = [];
   for (const algo of this.tablAlgoC1) {
     if (algo.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
       results1.push(algo);
     }
   }
   this.tablAlgoC1 = results1;  
   //.........
   for (const algo of this.tablAlgoC2) {
    if (algo.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
      results2.push(algo);
    }
  }
  this.tablAlgoC2 = results2;
  //.....................
  for (const algo of this.tablAlgoC3) {
    if (algo.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
      results3.push(algo);
    }
  }
  this.tablAlgoC3 = results3;



   if ((results1.length === 0 &&results2.length === 0&&results3.length === 0 )|| !key) {
     this.getAlgorithmes();
   }
  
   
  } 


//.......................................
 

 
}


