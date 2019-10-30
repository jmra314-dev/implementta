import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAbogadoPage } from './gestion-abogado.page';

describe('GestionAbogadoPage', () => {
  let component: GestionAbogadoPage;
  let fixture: ComponentFixture<GestionAbogadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAbogadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAbogadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
