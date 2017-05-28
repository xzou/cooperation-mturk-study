export class Player {
  public _id?: string;
  public contributions: number[];
  public times: number[];
  public opp_contributions: number[];
  public probabilities: number[];
  public mturk_code: string;

  constructor (
    public name?: string,
    public ip?: string,
    public is_correct?: boolean,
  ) {
    this.name = name;
    this.ip = ip;
    this.is_correct = is_correct;
  } 
}
