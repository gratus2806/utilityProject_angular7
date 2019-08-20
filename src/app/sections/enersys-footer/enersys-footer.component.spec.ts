import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnersysFooterComponent } from './enersys-footer.component';

describe('EnersysFooterComponent', () => {
  let component: EnersysFooterComponent;
  let fixture: ComponentFixture<EnersysFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnersysFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnersysFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
