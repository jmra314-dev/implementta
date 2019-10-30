import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetviewPage } from './streetview.page';

describe('StreetviewPage', () => {
  let component: StreetviewPage;
  let fixture: ComponentFixture<StreetviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
