import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BddService } from 'src/app/services/bdd.service';
import { Csvjson,  LogStat,  PcapStat } from './Stat';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
 
  pageLog =1;
  pagePcap =1;
  
  logStats:LogStat[]=[];
  pcapStats : PcapStat[]=[];
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  csvjsons : any[] = [];
  statmp : any [] = [];
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  btnsLog:Boolean[]=[];
  btnsPcap:Boolean[]=[];


  nbLog=0; 
  nbDos =0;
  nbBenign =0;

  nbAdrIp=0;
  nbProtocol =0;
  nbPaquet = 0;

  ddos = 0;
  dos = 0;
  webAttack = 0;
  benign2 =0;
  other = 0;

  //....................
  typeGraphLog!: ChartType;
  optionGraphLog!: any;
  dataGraphLog!:any;

  typeGraphPcap!: ChartType;
  optionGraphPcap!: any;
  dataGraphPcap!:any;
  //..........................
  selectAllLog = false;
  //.......................................
  constructor(private bdd: BddService) {   
    
  } 
  //.......................................
  ngOnInit() {
    this.getStats();  
    this.logStats.forEach(elt => {
       this.btnsLog.push(false);
    });
    this.pcapStats.forEach(elt => {
      this.btnsPcap.push(false);
   });
   //this.groupedCsvJson();
  }
  //.......................................
  nbrDate(dates:string[]){
    return dates.length;
  }
  //.......................................
  onDeleteDate(dates:string[],i:number){
    dates.splice(i, 1);
  }
  //.......................................
  //.......................................
  //.......................................  
  public getStats() {
    this.bdd.getAll('csvjson').subscribe(
      (response: Csvjson[]) => {
        this.csvjsons = response;
        console.log("csvjson");
        
        console.log(this.csvjsons);
        },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    //..............................................
    // this.bdd.getAll('logStat').subscribe(
    //   (response: any[]) => {
    //     this.logStats = response;
    //     console.log(this.logStats);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
    //..............................................
    this.bdd.getAll('pcapStat').subscribe(
      (response: PcapStat[]) => {
        this.pcapStats = response;
       // console.log(this.pcapStats);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    //...........................................   
    
  }
  //.......................................
  //.......................................
  getLogStat(){
    console.log("-.-.-..-.-.---....");
    console.log(this.logStats);
    
    console.log("-.-.-..-.-.---....");
    
    this.nbLog=this.nbDos =this.nbBenign =0;
    for (let i = 0; i < this.logStats.length; i++) {
      if (this.btnsLog[i]===true){
        //this.nbLog=this.nbLog+ this.logStats[i].nbLog;
        this.nbDos =this.nbDos+this.logStats[i].DosHulk;
        console.log(this.logStats[i].DosHulk);
        console.log(this.logStats[i].BENIGN);
        this.nbBenign = this.nbBenign +  this.logStats[i].BENIGN;
        this.nbLog = this.nbLog + this.logStats[i].DosHulk + this.logStats[i].BENIGN;
        // console.log( this.logStats[i].nbDos);
        // this.nbBenign =this.nbBenign+this.logStats[i].nbBenign;     
      }      
    }
    
  }
  //................................
  getPcapStat(){
    this.nbAdrIp=this.nbProtocol =this.nbPaquet = this.ddos = this.dos =  this.webAttack = this.benign2 = this.other = 0;
    for (let i = 0; i < this.pcapStats.length; i++) {
      if (this.btnsPcap[i]===true){
        this.nbAdrIp=this.nbAdrIp+ this.pcapStats[i].nbAdrIp;
        this.nbProtocol=this.nbProtocol+ this.pcapStats[i].nbProtocol;
        this.nbPaquet=this.nbPaquet+ this.pcapStats[i].nbPaquet;
        this.ddos=this.ddos+ this.pcapStats[i].ddos;
        this.dos=this.dos+ this.pcapStats[i].dos;
        this.webAttack=this.webAttack+ this.pcapStats[i].webAttack;
        this.benign2=this.benign2+ this.pcapStats[i].benign;
        this.other=this.other+ this.pcapStats[i].other;    
      }
      
    }
  }
  //.................................
  onChangeLog(i:number){
    this.btnsLog[i]= ! this.btnsLog[i];
    this.getLogStat();
    //.................
    this.typeGraphLog = 'pie';
    this.optionGraphLog = { responsive: false };
     
    this.dataGraphLog = {
    labels: ['BENGIN', 'DosHulk'],
    datasets: [{
      data: [this.nbBenign,this.nbDos ]
    }]
   };
       
  }
  //.................................
  onChangePcap(i:number){
    this.btnsPcap[i]= ! this.btnsPcap[i];
    this.getPcapStat();
    //.................
    this.typeGraphPcap = 'pie';
    this.optionGraphPcap = { responsive: true };
     
    this.dataGraphPcap = {
    labels: ['ddos', 'dos','webAttack','benign','other'],
    datasets: [{
      data: [this.ddos, this.dos,this.webAttack,this.benign2,this.other]
    }]
   };
       
  }
  //....................................
  groupedCsvJson(){
    
    console.log("++++++++++++++++++++++++++++++++++++");    
    console.log(this.csvjsons);
    
    var counts = this.csvjsons.reduce((p, c) => {
      var date = c.date;
      var label = c.label;
      if (!p.hasOwnProperty(date))
      {
        //p= new Object;
        p[c.date]={}
        p[date]["date"]=date;
        p[date]["BENIGN"]=0;
        p[date]["DosHulk"]=0;
      }
       p[date][label]++;
     
      return p;
    }, {}); 
    this.logStats=[];
    this.logStats=Object.values(counts);
    console.log("logStats");
    console.log(this.logStats);
    console.log("++++++++++++++++++++++++++++++++++++");
  }
  //....................................
 
}