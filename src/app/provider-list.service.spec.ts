import { TestBed } from '@angular/core/testing';

import { ProviderListService } from './provider-list.service';

describe('ProviderListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProviderListService = TestBed.get(ProviderListService);
    expect(service).toBeTruthy();
  });
});
