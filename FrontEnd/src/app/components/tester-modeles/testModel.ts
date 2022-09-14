//import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Person } from "../gerer-compte/person";
import { Model } from "../gerer-modele/model";

export interface TestModel {
    id : string;
	dates: Date[];
	testType : string;
	model: Model; 
	testDate : Date;
	user: Person;
}

export interface dateModel{
	year:number,
	month:number,
	day:number
}