import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansPanelComponent } from './plans-panel.component';

describe('PlansPanelComponent', () => {
  let component: PlansPanelComponent;
  let fixture: ComponentFixture<PlansPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
