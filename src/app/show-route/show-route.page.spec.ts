import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoutePage } from './show-route.page';

describe('ShowRoutePage', () => {
  let component: ShowRoutePage;
  let fixture: ComponentFixture<ShowRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRoutePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
