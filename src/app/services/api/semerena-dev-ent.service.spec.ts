import { TestBed } from '@angular/core/testing';

import { SemerenaDevEntService } from './semerena-dev-ent.service';

describe('SemerenaDevEntService', () => {
  let service: SemerenaDevEntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemerenaDevEntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
