import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPagePage } from './gestion-page.page';

describe('GestionPagePage', () => {
  let component: GestionPagePage;
  let fixture: ComponentFixture<GestionPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
