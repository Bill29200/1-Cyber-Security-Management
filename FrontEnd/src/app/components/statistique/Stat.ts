// export interface LogStat {
//     id: string;
//     date : Date;
//     nbLog : number;
//     nbAnomalie : number;
//     nbBenign : number;
// }

export interface LogStat {
    id: string;
    date : string;
    BENIGN : number;
    nbLog : number;
    DosHulk : number;
}

export interface PcapStat {
    id: string;
    date : Date;
    nbAdrIp : number;
    nbProtocol : number;
    nbPaquet : number;
    ddos: number;
    dos: number;
    webAttack: number;
    benign: number;
    other: number;
}

export interface Csvjson {
    id: string;
    date: string;
    label: string;
    
    
}