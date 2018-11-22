import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSujetComponent } from './vote-sujet.component';

describe('VoteSujetComponent', () => {
  let component: VoteSujetComponent;
  let fixture: ComponentFixture<VoteSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
