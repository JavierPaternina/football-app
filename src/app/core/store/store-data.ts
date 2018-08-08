import { Players } from "./../../../../shared/model/players.model";
import { MatchTeams } from "./../../../../shared/model/match-teams.model";
import { Match } from "./../../../../shared/model/match.model";

export interface StoreData {
  player: Players;
  matches: { [key: string]: Match };
  teams: { [key: string]: MatchTeams };
}
