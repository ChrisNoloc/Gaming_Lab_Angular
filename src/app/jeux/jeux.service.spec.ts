import { TestBed, inject } from '@angular/core/testing';

import { JeuxService } from './jeux.service';

describe('JeuxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeuxService]
    });
  });

  it('should be created', inject([JeuxService], (service: JeuxService) => {
    expect(service).toBeTruthy();
  }));
});
