import { TestBed } from '@angular/core/testing';

import { OzgecmisServiceService } from './ozgecmis-service.service';

describe('OzgecmisServiceService', () => {
  let service: OzgecmisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OzgecmisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
