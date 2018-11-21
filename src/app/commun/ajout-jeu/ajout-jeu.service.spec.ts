import { TestBed, inject } from '@angular/core/testing';

import { AjoutJeuService } from './ajout-jeu.service';

describe('AjoutJeuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjoutJeuService]
    });
  });

  it('should be created', inject([AjoutJeuService], (service: AjoutJeuService) => {
    expect(service).toBeTruthy();
  }));
});
