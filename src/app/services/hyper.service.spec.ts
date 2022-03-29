import { TestBed } from '@angular/core/testing';

import { HyperService } from './hyper.service';

describe('HyperService', () => {
  let service: HyperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HyperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
