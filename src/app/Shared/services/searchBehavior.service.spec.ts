/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchBehaviorService } from './searchBehavior.service';

describe('Service: SearchBehavior', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBehaviorService]
    });
  });

  it('should ...', inject([SearchBehaviorService], (service: SearchBehaviorService) => {
    expect(service).toBeTruthy();
  }));
});
