import { TestBed } from '@angular/core/testing';

import { DebitoService } from './debito.service';

describe('DebitoService', () => {
  let service: DebitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
