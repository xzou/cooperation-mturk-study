import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Player } from './player';


@Injectable()
export class PlayerService {
  private playersUrl = '/api/players';

  constructor(private http: Http) { }

  // GET ('/api/players')
  getPlayers(): Promise<Player[]> {
    return this.http.get(this.playersUrl)
                .toPromise()
                .then(response => response.json() as Player[])
                .catch(this.handleError);
  }

  // POST ('/api/players')
  addPlayer(newPlayer: Player): Promise<Player> {
    return this.http.post(this.playersUrl, newPlayer)
                .toPromise()
                .then(response => response.json() as Player)
                .catch(this.handleError);
  }

  // PUT ('/api/players/:id')
  updatePlayer(player: Player): Promise<Player> {
    var putUrl = this.playersUrl + '/' + player._id;
    return this.http.put(putUrl, player)
                .toPromise()
                .then(response => response.json() as Player)
                .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message:
      error.status ? `${error.status} - ${error.statusText}` :
      'Server error happening';
    console.log(errMsg);
  }

}
