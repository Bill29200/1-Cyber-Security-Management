import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Person } from '../components/gerer-compte/person';
import { Observable } from 'rxjs';

///////////////////////////////////

@Injectable({
  providedIn: 'root'
})
export class BddService {
  
 url='http://localhost:8080/api/'
 //url='/api/';
  status!: string;
  sectionTitle:string='Cyber security project';
  //.........................................
  constructor( private httpClient: HttpClient) { }
  //.........................................
  public getAll(tableName:string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url+tableName+'/all');
  }
  //.........................................
  public getById(tableName:string,id: string): Observable<any> {
    return this.httpClient.get<any>(this.url+tableName+'/get/'+id);
  }
  //.........................................
  public getByEmail(tableName:string,email: string): Observable<any> {
    return this.httpClient.get<any>(this.url+tableName+'/getByEmail/'+email);
  }
  //.........................................
  public getByLayer(tableName:string,layer: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url+tableName+'/getByLayer/'+layer);
  }
  //....................................
  public addElement(tableName:string, obj: any): Observable<any> {
    return this.httpClient.post<any>(this.url+tableName+'/add',obj);
  }
  //.........................................
  public update(tableName:string, obj: any): Observable<any> {
    return this.httpClient.put<any>(this.url+tableName+'/update',obj);
  }
  //.........................................
  public delElement(tableName:string, id: string): Observable<void> {
    return this.httpClient.delete<void>(this.url+tableName+'/delete/'+id);
  }
  //.........................................
  public deleteAll(tableName:string): Observable<void> {
    return this.httpClient.delete<void>(this.url+tableName+'/deleteAll');
  } 
  //.........................................
  getTable(tableName:string){
    let url2 = '';
    let tableau:any[]= [];
     this.httpClient.get<any>(url2).subscribe((response) => {  
    if (response != undefined) {     
      for (let attribut in response) {
        let p: any = response[attribut];      
        p.id = attribut;
        tableau.push(p);
      }
    }
  });
  return tableau;
}
//.......................................
delAll(tableName:string){
  let url2= this.url+tableName+'/deleteAll'
  this.httpClient.delete(url2).subscribe(response=>{  
  });
}
//......................................
getSectionTitle(){
  return this.sectionTitle;
}
setSectionTitle(s:string)
{
  this.sectionTitle=s;
}
//.....................................

}
