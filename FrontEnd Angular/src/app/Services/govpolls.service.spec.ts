import { TestBed } from '@angular/core/testing';

import { GovpollsService } from './govpolls.service';

describe('GovpollsService', () => {
  let service: GovpollsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GovpollsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
