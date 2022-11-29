import { TestBed } from '@angular/core/testing';

import { EventyService } from './eventy.service';

describe('EventyService', () => {
  let service: EventyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
