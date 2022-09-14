import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { BddService } from 'src/app/services/bdd.service';
import { Csvjson} from './csvjson';



@Component({
  selector: 'app-detection',
  templateUrl: './detection.component.html',
  styleUrls: ['./detection.component.scss']
})
export class DetectionComponent implements OnInit {
  csvjsons : any[] = [];
  groups : any[] = [];
  groupsGroup : any[] = [];
  statmp : any [] = [];

  titles : any[]=[];
  benign : any[]=[];
 // keys : any[]=[];
  page :number=1; 
  page2 :number=1; 
  page3 :number=1; 
  
  constructor(private bdd:BddService) { }

  ngOnInit(): void {   
    this.getTable();
            
  }
  //..................................
  public getTable()
  {
    this.bdd.getAll('csvjson').subscribe(
      (response: Csvjson[]) => {
        this.csvjsons = response;
        },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //..................................
  show(){
    console.log(".+.+.+.+.+.+.+."); 
    this.csvjsons.forEach(element => {
      this.csvjsons.push(element);
      console.log(element);
      console.log(".+.+.+.+.+.+.+.");      
    });
    
  }
  //..................................
  filter(str : string){
    console.log("???????????????????????????????????????????????????");
    this.benign = this.csvjsons.filter(elt => elt.label ===str);
    console.log(this.benign.length);
    console.log("???????????????????????????????????????????????????");
  }
  //..................................
  groupBy(list: any, key:any) {
    return list.reduce((rv:any, x:any) =>{
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  //..................................
  groupe(){
     console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
     this.groups=this.groupBy(this.csvjsons,"date");
     console.log("groups");
     console.log(this.groups);
     console.log("...   |||  ...   |||  ...   |||  ...   |||");
     var keys = Object.keys(this.groups);
     console.log(keys);
     
    
    console.log("...   |||  ...   |||  ...   |||  ...   |||");

    
    
        
    console.log("---------------------------------------------------------------");
    
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    //  var keyCount  = Object.keys(this.groups).length;  
    //  console.log(keyCount);
    //  var content  = Object.values(this.groups);  

    //  console.log("|||||||||||||||||||||||||||||||||||||||||||||");
     
    //  console.log(content);
    //  this.titles = Object.keys(this.groups)
    //  console.log(this.titles);
       
  }
  //..................................
  keys(){
    // this.titles = Object.keys(this.groupe);
    // console.log(this.titles);
    var list = [
      {centerName: "--", batchName: "MentorSchedule_5D5C", scheduleStartDate: "20-Nov-2019 14:38:17", scheduleEndDate: "20-Dec-2019 14:38:17"},{centerName: "--", batchName: "MentorSchedule_2657", scheduleStartDate: "20-Nov-2019 10:29:46", scheduleEndDate: "20-Dec-2019 10:29:46"}
      ,{centerName: "--", batchName: "Enroll_cf845bd8-43", scheduleStartDate: "18-Jul-2019 18:32:00", scheduleEndDate: "31-Jul-2019 21:28:00"}
      ];
      //console.log(list);
      console.log("...    ...    ...    ...    ... ");
      this.titles = Object.keys(this.groups)
      console.log(this.titles);
    
  }
  //.................................
  test(){
      
  }
  
  
  //..........................
  groupedCsvJson(){
    console.log("++++++++++++++++++++++++++++++++++++");    
    var counts = this.csvjsons.reduce((p, c) => {
      var date = c.date;
      var label = c.label;
      if (!p.hasOwnProperty(date))
      {
        //p= new Object;
        p[c.date]={}
        p[date]["timestamp"]=date;
        p[date]["BENIGN"]=0;
        p[date]["DoS Hulk"]=0;
      }
       p[date][label]++;
     
      return p;
    }, {}); 
    
    this.statmp=Object.values(counts);
    console.log(this.statmp);
    console.log("++++++++++++++++++++++++++++++++++++");
  }
}
