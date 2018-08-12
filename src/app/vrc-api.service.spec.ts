import { TestBed, inject } from '@angular/core/testing';

import { VrcApiService } from './vrc-api.service';

describe('VrcApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VrcApiService]
    });
  });

  it('should be created', inject([VrcApiService], (service: VrcApiService) => {
    expect(service).toBeTruthy();
  }));
});
