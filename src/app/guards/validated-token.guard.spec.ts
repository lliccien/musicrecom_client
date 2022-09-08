import { TestBed } from '@angular/core/testing';

import { ValidatedTokenGuard } from './validated-token.guard';

describe('ValidatedTokenGuard', () => {
  let guard: ValidatedTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidatedTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
