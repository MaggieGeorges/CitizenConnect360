import { TestBed } from '@angular/core/testing';

import { GovIncidentsService } from './gov-incidents.service';

describe('GovIncidentsService', () => {
  let service: GovIncidentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GovIncidentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
