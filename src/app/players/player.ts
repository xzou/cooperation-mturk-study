export class Player {
  _id?: string;
  name: string;
  IP: string;
  is_correct: boolean;
  contributions: number[];
  times: number[];
  opp_contributions: number[];
  probabilities: number[];
  mturk_code: string;
}
