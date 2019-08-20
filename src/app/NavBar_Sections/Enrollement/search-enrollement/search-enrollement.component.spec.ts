import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEnrollementComponent } from './search-enrollement.component';

describe('SearchEnrollementComponent', () => {
  let component: SearchEnrollementComponent;
  let fixture: ComponentFixture<SearchEnrollementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEnrollementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEnrollementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
