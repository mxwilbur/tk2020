import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctFormComponent } from './acct-form.component';

describe('AcctFormComponent', () => {
  let component: AcctFormComponent;
  let fixture: ComponentFixture<AcctFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcctFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
