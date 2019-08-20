import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBuildEnersysComponent } from './final-build-enersys.component';

describe('FinalBuildEnersysComponent', () => {
  let component: FinalBuildEnersysComponent;
  let fixture: ComponentFixture<FinalBuildEnersysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalBuildEnersysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalBuildEnersysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
