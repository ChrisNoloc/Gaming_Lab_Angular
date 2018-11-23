import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCommentaireComponent } from './vote-commentaire.component';

describe('VoteCommentaireComponent', () => {
  let component: VoteCommentaireComponent;
  let fixture: ComponentFixture<VoteCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
