import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutJeuComponent } from './ajout-jeu.component';

describe('AjoutJeuComponent', () => {
  let component: AjoutJeuComponent;
  let fixture: ComponentFixture<AjoutJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
