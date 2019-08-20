import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewenrollementComponent } from './newenrollement.component';

describe('NewenrollementComponent', () => {
  let component: NewenrollementComponent;
  let fixture: ComponentFixture<NewenrollementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewenrollementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewenrollementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
