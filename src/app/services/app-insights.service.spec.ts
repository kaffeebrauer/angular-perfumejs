import { TestBed } from '@angular/core/testing';

import { AppInsightsService } from './app-insights.service';

describe('AppInsightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppInsightsService = TestBed.get(AppInsightsService);
    expect(service).toBeTruthy();
  });
});
