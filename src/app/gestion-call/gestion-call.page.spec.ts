import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCallPage } from './gestion-call.page';

describe('GestionCallPage', () => {
  let component: GestionCallPage;
  let fixture: ComponentFixture<GestionCallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
