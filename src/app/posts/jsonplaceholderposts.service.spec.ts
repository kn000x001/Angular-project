import { TestBed } from '@angular/core/testing';

import { JSONPlaceholderpostsService } from './jsonplaceholderposts.service';

describe('JSONPlaceholderpostsService', () => {
  let service: JSONPlaceholderpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONPlaceholderpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
