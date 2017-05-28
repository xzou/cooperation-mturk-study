/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PdIPService } from './pd-ip.service';

describe('PdIPService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdIPService]
    });
  });

  it('should ...', inject([PdIPService], (service: PdIPService) => {
    expect(service).toBeTruthy();
  }));
});
