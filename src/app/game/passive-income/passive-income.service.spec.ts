import { TestBed } from '@angular/core/testing';

import { PassiveIncomeService } from './passive-income.service';

describe('PassiveRevenueService', () => {
  let service: PassiveIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassiveIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
