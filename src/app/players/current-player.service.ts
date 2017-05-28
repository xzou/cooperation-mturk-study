import { Injectable } from '@angular/core';

import { Player } from './player';

@Injectable()
export class CurrentPlayerService {

  constructor() { }

  player: Player = {
    name: '',
    ip: '',
    is_correct: true,
    contributions: [],
    times: [],
    opp_contributions: [],
    probabilities: [],
    mturk_code: ''
  };

  getName() {
    return this.player.name;
  }

  saveName(name: string) {
    this.player.name = name;
  }

  saveIP(ip: string) {
    this.player.ip = ip;
  }

  getIP() {
    return this.player.ip;
  }
}
