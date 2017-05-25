export class Player {
  _id?: string;
  IP: string;
  is_correct: boolean;
  contributions: number[];
  times: number[];
  opp_contributions: number[];
  probabilities: number[];
  mturk_code: string;

  constructor(ip: string, is_correct: boolean) {
    this.IP = ip;
    this.is_correct = is_correct;
  }
}
