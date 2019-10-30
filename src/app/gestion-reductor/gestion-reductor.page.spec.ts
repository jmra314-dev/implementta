import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReductorPage } from './gestion-reductor.page';

describe('GestionReductorPage', () => {
  let component: GestionReductorPage;
  let fixture: ComponentFixture<GestionReductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionReductorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
