import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnersysheaderComponent } from './enersysheader.component';

describe('EnersysheaderComponent', () => {
  let component: EnersysheaderComponent;
  let fixture: ComponentFixture<EnersysheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnersysheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnersysheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
