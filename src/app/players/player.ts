export class Player {
  public _id?: string;
  public name?: string;
  public age?: number;
  public gender?: string;
  public ip?: string;
  public is_correct?: boolean;
  public contributions?: number[];
  public opp_contributions?: number[];
  public probabilities?: number[];
  public contrib_times?: number[];
  public probabilities_times?: number[];
  public player_score?: number;
  public opp_score?: number;
  public mturk_code?: string;
  public is_complete?: boolean;
  public gender_filtered?: boolean;
  public opp_behavior?: string;
  public check_answer?: string;
  public condition?: number;
  public payment?: string;
  public init_pcoop?: number;

  constructor (
    name?: string,
    age?: number,
    gender?: string,
    gender_filtered?: boolean
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.is_complete = false;
    this.gender_filtered = gender_filtered;
  } 
}
