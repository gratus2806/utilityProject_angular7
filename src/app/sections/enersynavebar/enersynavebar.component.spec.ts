import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnersynavebarComponent } from './enersynavebar.component';

describe('EnersynavebarComponent', () => {
  let component: EnersynavebarComponent;
  let fixture: ComponentFixture<EnersynavebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnersynavebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnersynavebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
