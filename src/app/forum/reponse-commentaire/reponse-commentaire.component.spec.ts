import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseCommentaireComponent } from './reponse-commentaire.component';

describe('ReponseCommentaireComponent', () => {
  let component: ReponseCommentaireComponent;
  let fixture: ComponentFixture<ReponseCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReponseCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
