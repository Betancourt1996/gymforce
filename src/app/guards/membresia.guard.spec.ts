import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { membresiaGuard } from './membresia.guard';

describe('membresiaGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => membresiaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
