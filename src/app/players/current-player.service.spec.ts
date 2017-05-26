/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentPlayerService } from './current-player.service';

describe('CurrentPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentPlayerService]
    });
  });

  it('should ...', inject([CurrentPlayerService], (service: CurrentPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
