import { Injectable } from '@angular/core';

import { Player } from './player';

@Injectable()
export class CurrentPlayerService {

  constructor() { }

  player: Player = {
    _id: '',
    ip: '',
    name: '',
    age: 0,
    gender: '',
    is_correct: false,
    contributions: [],
    opp_contributions: [],
    probabilities: [],
    contrib_times: [],
    probabilities_times: [],
    player_score: 0,
    opp_score: 0,
    mturk_code: '',
    is_complete: false
  };

  getPlayer() {
    return this.player;
  }

  saveID(id: string) {
    this.player._id = id;
  }

  saveIP(ip: string) {
    this.player.ip = ip;
  }

  getIP() {
    return this.player.ip;
  }

  saveName(name: string) {
    this.player.name = name;
  }

  getName() {
    return this.player.name;
  }
  
  saveAge(age: number) {
    this.player.age = age;
  }

  getAge() {
    return this.player.age;
  }

  saveGender(gender: string) {
    this.player.gender = gender;
  }

  getGender() {
    return this.player.gender;
  }

  saveQuizAnswer(answer: boolean) {
    this.player.is_correct = answer;
  }

  getQuizAnswer() {
    return this.player.is_correct;
  }

  saveContributions(contribs: number[]) {
    this.player.contributions = contribs;
  }

  saveOppContributions(contribs: number[]) {
    this.player.opp_contributions = contribs;
  }

  saveProbabilities(probs: number[]) {
    this.player.probabilities = probs;
  }

  saveContribTimes(times: number[]) {
    this.player.contrib_times = times;
  }

  saveProbabilitiesTimes(times: number[]) {
    this.player.probabilities_times = times;
  }

  savePlayerScore(score: number) {
    this.player.player_score = score;
  }

  saveOppScore(score: number) {
    this.player.opp_score = score;
  }
}
