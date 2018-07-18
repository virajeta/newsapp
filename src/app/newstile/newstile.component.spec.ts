import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstileComponent } from './newstile.component';

describe('NewstileComponent', () => {
  let component: NewstileComponent;
  let fixture: ComponentFixture<NewstileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
