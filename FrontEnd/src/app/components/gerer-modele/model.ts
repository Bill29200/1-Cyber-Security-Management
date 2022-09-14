import { Person } from "../gerer-compte/person";

export interface Model {
    id: string;
    name: string;
    type: string;
    user: Person;
    algoc1:string;
    algoc2:string;
    algoc3:string;
    hpc1:string;
    hpc2:string;
    hpc3:string;
}