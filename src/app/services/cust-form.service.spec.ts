import { TestBed } from '@angular/core/testing';

import { CustFormService } from './cust-form.service';

describe('CustFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustFormService = TestBed.get(CustFormService);
    expect(service).toBeTruthy();
  });
});
