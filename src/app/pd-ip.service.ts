import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

import { Jsonp } from '@angular/http';

@Injectable()
export class PDIPService {

  ip: any;

  constructor(private jsonp: Jsonp) { }

  getIP() {
    return this.jsonp.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
                .toPromise()
                .then( response => response.json())
                .catch(this.handleError);
  }

  private handleError (error) {
    let errMsg = (error.message) ? error.message:
      error.status ? `${error.status} - ${error.statusText}` :
      'Server error happening';
    console.log(errMsg);
  }
}
