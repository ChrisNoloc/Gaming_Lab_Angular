import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseSujetComponent } from './reponse-sujet.component';

describe('ReponseSujetComponent', () => {
  let component: ReponseSujetComponent;
  let fixture: ComponentFixture<ReponseSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReponseSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
