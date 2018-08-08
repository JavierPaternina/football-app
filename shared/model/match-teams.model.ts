import { Players } from './players.model';

export interface MatchTeams {

    matchId: string;
    players: Players[];
    teamName: string;

}
