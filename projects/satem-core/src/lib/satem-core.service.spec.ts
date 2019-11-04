import { TestBed } from '@angular/core/testing';

import { SatemCoreService } from './satem-core.service';

describe('SatemCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SatemCoreService = TestBed.get(SatemCoreService);
    expect(service).toBeTruthy();
  });
});
