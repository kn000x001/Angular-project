import { TestBed } from '@angular/core/testing';

import { JSONPlaceholderlastService } from './jsonplaceholderlast.service';

describe('JSONPlaceholderlastService', () => {
  let service: JSONPlaceholderlastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONPlaceholderlastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
