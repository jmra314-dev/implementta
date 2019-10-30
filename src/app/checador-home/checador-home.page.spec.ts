import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecadorHomePage } from './checador-home.page';

describe('ChecadorHomePage', () => {
  let component: ChecadorHomePage;
  let fixture: ComponentFixture<ChecadorHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecadorHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecadorHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
