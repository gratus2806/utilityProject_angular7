import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnrollementComponent } from './add-enrollement.component';

describe('AddEnrollementComponent', () => {
  let component: AddEnrollementComponent;
  let fixture: ComponentFixture<AddEnrollementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnrollementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnrollementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
