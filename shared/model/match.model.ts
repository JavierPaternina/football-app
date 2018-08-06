import {Players} from './players.model';
import {MatchTeams} from './match-teams.model';
export interface Match{
   
    id:number;
    players:string[];
    date:string;
    place:string;
    teams:string[];
    

}