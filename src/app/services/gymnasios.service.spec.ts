import { TestBed } from '@angular/core/testing';

import { GymnasiosService } from './gymnasios.service';

describe('GymnasiosService', () => {
  let service: GymnasiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymnasiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
