export class Player {
  public _id?: string;
  public ip?: string;
  public name?: string;
  public age?: number;
  public gender?: string;
  public is_correct?: boolean;
  public contributions?: number[];
  public opp_contributions?: number[];
  public probabilities?: number[];
  public contrib_times?: number[];
  public probabilities_times?: number[];
  public player_score?: number;
  public opp_score?: number;
  public mturk_code?: string;

  constructor (
    ip?: string,
    name?: string,
    age?: number,
    gender?: string) {

    this.ip = ip;
    this.name = name;
    this.age = age;
    this.gender = gender;
  } 
}
