import { TestBed } from '@angular/core/testing';

import { TeamViewerService } from './team-viewer.service';

describe('TeamViewerService', () => {
  let service: TeamViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
