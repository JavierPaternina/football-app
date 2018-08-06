import { Players } from './players.model';

export interface MatchTeams {

    matchId: number;
    players: Players[];
    teamName: string;

}