import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnersysSidebarComponent } from './enersys-sidebar.component';

describe('EnersysSidebarComponent', () => {
  let component: EnersysSidebarComponent;
  let fixture: ComponentFixture<EnersysSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnersysSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnersysSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
