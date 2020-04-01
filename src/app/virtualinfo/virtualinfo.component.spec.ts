import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualinfoComponent } from './virtualinfo.component';

describe('VirtualinfoComponent', () => {
  let component: VirtualinfoComponent;
  let fixture: ComponentFixture<VirtualinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
