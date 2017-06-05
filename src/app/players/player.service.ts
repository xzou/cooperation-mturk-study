import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

import { Player } from './player';


@Injectable()
export class PlayerService {
  private playersUrl = 'api/players';

  constructor(private http: Http) { }

  getPlayers(): Observable<Array<Player>> {
    return this.http
            .get(this.playersUrl)
    .map(res => res.json())
      .catch(this.handleError);
  }

  addPlayer(player: Player): Observable<Player> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
          .post(this.playersUrl, JSON.stringify(player), { headers: headers })
          .map(res => res.json())
          .catch(this.handleError);
  }

  updatePlayer(player: Player): Observable<Player> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
            .put(this.playersUrl+'/'+player._id, JSON.stringify(player), { headers: headers }) 
            .map(res => res.json())
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}

