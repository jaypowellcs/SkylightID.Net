import { TestBed } from '@angular/core/testing';

import { DeckmountService } from './deckmount.service';

describe('DeckmountService', () => {
  let service: DeckmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
