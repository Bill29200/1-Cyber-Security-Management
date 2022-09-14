import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BddService } from 'src/app/services/bdd.service';
import { Algo } from '../algorithme/algo';
import { Model } from './model';

@Component({
  selector: 'app-gerer-modele',
  templateUrl: './gerer-modele.component.html',
  styleUrls: ['./gerer-modele.component.scss']
})
export class GererModeleComponent implements OnInit {

  public utilisateur = {
    name: this.auth.utilisateur.name,
    email: this.auth.utilisateur.email,
    password: this.auth.utilisateur.password,
    bu: this.auth.utilisateur.bu,
    role: this.auth.utilisateur.role,
    id: this.auth.utilisateur.id
  }
  modelManager={
    sa:{saR:true,saU:true,saD:true,mR:true,mU:true,mD:true,oR:true,oU:false,oD:true},
    ot:{saR:true,saU:false,saD:false,mR:true,mU:true,mD:true,oR:false,oU:false,oD:false}
  }

  access =" R U D" ;

  private tableName = 'model';
  public models: Model[]=[];
  public editModel!:Model;
  public addModel!: Model;
  public deleteModel!: Model;
  public tablAlgoc1!: Algo[];
  public tablAlgoc2!: Algo[];
  public tablAlgoc3!: Algo[];

  public page = 1;

  public name:string='';
  public type:string='';
  public algoc1:string='';
  public hpc1:string='';
  public algoc2:string='';
  public hpc2:string='';
  public algoc3:string='';
  public hpc3:string='';

  constructor(private auth: AuthService, private bdd: BddService) { }
  //.......................................
  ngOnInit(): void {
    this.getModels();
    this.getAlgoc(1);
    this.getAlgoc(2);
    this.getAlgoc(3);
  }
  //.................................................
  public getModels() {
    this.bdd.getAll(this.tableName).subscribe(
      (response: Model[]) => {
        this.models = response;
       // console.log(this.models);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //.................................................
 public onAddModel(): void {
    // document.getElementById("add-model-form")?.click();
    let model={
      name: this.name,
      type : this.type,
      // id: '',
      user: this.auth.utilisateur,
      algoc1: this.algoc1,
      algoc2: this.algoc2,
      algoc3: this.algoc3,
      hpc1: this.hpc1,
      hpc2: this.hpc2,
      hpc3: this.hpc3
    }
    this.name=this.type=this.algoc1=this.algoc2=this.algoc3=this.hpc1=this.hpc2=this.hpc3='';
    this.bdd.addElement(this.tableName, model).subscribe(
      (response: Model) => {
       // console.log(response);
        this.getModels();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //.................................................
  onChargerModele(model: Model) {
    this.editModel = { 
      id:model.id,
      name:model.name, 
      type:model.type,      
      algoc1:model.algoc1,
      hpc1:model.hpc1,
      algoc2:model.algoc2,
      hpc2:model.hpc2,
      algoc3:model.algoc3,
      hpc3:model.hpc3,
      user:model.user
    }
   
  }
  //...............................
  deleteAllModel() {
    this.bdd.deleteAll(this.tableName).subscribe(
      (response: void) => {
      //  console.log(response);
        this.getModels();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );       
   
  }
  //.................................
  getNbModele() {
    let cpt = 0;
    if (this.models) {
      this.models.forEach(elt => {
        if (((this.utilisateur.role === 'superadmin') || (((elt.user.name === this.utilisateur.name) &&
          (elt.user.role === this.utilisateur.role) &&
          (elt.user.bu === this.utilisateur.bu))) || (elt.user.role === 'superadmin'))) { cpt++ }
      });
    }
    return cpt;
  }
  //............................
  getAlgoc(couche: number) {

    if (couche == 1) {
      this.bdd.getByLayer("algorithme", "Log_prediction").subscribe(
        (response: Algo[]) => { this.tablAlgoc1 = response; },
        (error: HttpErrorResponse) => { alert(error.message); }
      );
    } else if (couche == 2) {
      this.bdd.getByLayer("algorithme", "Anomaly_detection").subscribe(
        (response: Algo[]) => { this.tablAlgoc2 = response; },
        (error: HttpErrorResponse) => { alert(error.message); }
      );
    } else if (couche == 3) {
      this.bdd.getByLayer("algorithme", "Attack_classification").subscribe(
        (response: Algo[]) => { this.tablAlgoc3 = response; },
        (error: HttpErrorResponse) => { alert(error.message); }
      );
    }
  }
  //..............
  deleteCdt(i: number) {
    return ((this.models[i].user.name===this.utilisateur.name) &&
            (this.models[i].user.role===this.utilisateur.role)&&
            (this.models[i].user.bu===this.utilisateur.bu))||this.utilisateur.role==='superadmin';
  }
  //...............
  updateCdt(i: number) {
    return ((this.models[i].user.name===this.utilisateur.name) &&
    (this.models[i].user.role===this.utilisateur.role)&&
    (this.models[i].user.bu===this.utilisateur.bu));
  }
  //................
  getCdt(i: number, type: string) {
    let cdt=false;
   
   if (this.utilisateur.role==='superadmin')
   {
    if ((this.models[i].user.role==='superadmin')|| (this.sameUserModel(i))){ this.access="RUD"}
    else {this.access="R-D"}
    }
   else{
    if (this.models[i].user.role==='superadmin') {this.access="R--"}
    else if (this.sameUserModel(i)) {this.access="RUD"}
    else {this.access="---"}
    }
    if (type==='R') {cdt=(this.access.indexOf('R')>-1)}
    else if (type ==='U') {cdt=(this.access.indexOf('U')>-1)}
    else if (type==='D') {cdt=(this.access.indexOf('D')>-1)}
   return cdt;  
  }
  //.................
  srcAvatar(p: Model) {
    let av = "";
    if (p?.user?.role === 'superadmin') { av = "assets/img/sa.png" }
    if (p?.user?.role === 'admin') { av = "assets/img/ad.png" }
    if (p?.user?.role === 'user') { av = "assets/img/us.png" }
    return av;
  }
  //..................
  sameUserModel(i: number) {
     return (this.models[i].user.name===this.utilisateur.name&&this.models[i].user.role===this.utilisateur.role&&this.models[i].user.bu===this.utilisateur.bu)
  }
  //................
  ShowModelManager() {

  }
  Mat(pos: number) {
    if (pos===11) this.modelManager.sa.saR=!this.modelManager.sa.saR;
    if (pos===12) this.modelManager.sa.saU=!this.modelManager.sa.saU;
    if (pos===13) this.modelManager.sa.saD=!this.modelManager.sa.saD;

    if (pos===14) this.modelManager.sa.mR=!this.modelManager.sa.mR;
    if (pos===15) this.modelManager.sa.mU=!this.modelManager.sa.mU;
    if (pos===16) this.modelManager.sa.mD=!this.modelManager.sa.mD;

    if (pos===17) this.modelManager.sa.oR=!this.modelManager.sa.oR;
    if (pos===18) this.modelManager.sa.oU=!this.modelManager.sa.oU;
    if (pos===19) this.modelManager.sa.oD=!this.modelManager.sa.oD;

    if (pos===21) this.modelManager.ot.saR=!this.modelManager.ot.saR;
    if (pos===22) this.modelManager.ot.saU=!this.modelManager.ot.saU;
    if (pos===23) this.modelManager.ot.saD=!this.modelManager.ot.saD;

    if (pos===24) this.modelManager.ot.mR=!this.modelManager.ot.mR;
    if (pos===25) this.modelManager.ot.mU=!this.modelManager.ot.mU;
    if (pos===26) this.modelManager.ot.mD=!this.modelManager.ot.mD;

    if (pos===27) this.modelManager.ot.oR=!this.modelManager.ot.oR;
    if (pos===28) this.modelManager.ot.oU=!this.modelManager.ot.oU;
    if (pos===29) this.modelManager.ot.oD=!this.modelManager.ot.oD;
  }
  //.................
  public searchModels(key: string): void {
    //console.log(key);
    const results: Model[] = [];
    for (const model of this.models) {
     // console.log(model);
      if (model.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || model.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || model.algoc1.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || model.algoc2.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || model.algoc3.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || model.hpc1.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || model.hpc2.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || model.hpc2.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || model.user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(model);
      }
    }
    this.models = results;
    if (results.length === 0 || !key) {
      this.getModels();
    }
  }
  //......................................................
  print(): void{
     let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
     let tableSelect = document.getElementById('models');
     let tableHtml = tableSelect?.outerHTML.replace(/ /g, '%20');
     let downloadLink = document.createElement('a');
     document.body.appendChild(downloadLink);
     downloadLink.href ='data:' + dataType+', '+tableHtml;
     downloadLink.download = 'Model-report.xls';
     downloadLink.click();
     document.body.removeChild(downloadLink);
  }
  //................................................................................
  testFormAdd(): boolean{
    return (this.name=='' || this.type=='' || this.algoc1=='' || this.hpc1=='' || this.algoc2=='' || this.hpc2=='' || this.algoc3=='' || this.hpc3=='');
  }
  //..........................................................................
  public onDeleteModel(ModelId: string): void {
    this.bdd.delElement(this.tableName,ModelId).subscribe(
      (response: void) => {
       // console.log(response);
        this.getModels();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
//........................................
onChargerModel(p: Model){
  this.deleteModel = p;  
}
//......................................................................
onChargerEditModele(p: Model){
  this.editModel = p;
 // console.log(p);
  
  this.name = p.name;
  this.type = p.type;
  this.algoc1= p.algoc1;
  this.hpc1=p.hpc1;
  this.algoc2=p.algoc2;
  this.hpc2=p.hpc2;
  this.algoc3 = p.algoc3;
  this.hpc3 = p.hpc3;

}
//.......................................................................
public onUpdateModel(model: Model): void {
  model.name= this.name;
  model.type = this.type;
  model.algoc1= this.algoc1;
  model.hpc1= this.hpc1;
  model.algoc2= this.algoc2;
  model.hpc2 = this.hpc2;
  model.algoc3 = this.algoc3;
  model.hpc3 = this.hpc3;
  this.name = this.type = this.algoc1= this.algoc2=this.algoc3= this.hpc1=this.hpc2= this.hpc3='';
  this.bdd.update(this.tableName, model).subscribe(
    (response: Model) => {
    //  console.log(response);
      this.getModels();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
}
