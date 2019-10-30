import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGestorPage } from './gestion-gestor.page';

describe('GestionGestorPage', () => {
  let component: GestionGestorPage;
  let fixture: ComponentFixture<GestionGestorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionGestorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionGestorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
