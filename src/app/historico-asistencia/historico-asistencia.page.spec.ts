import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoAsistenciaPage } from './historico-asistencia.page';

describe('HistoricoAsistenciaPage', () => {
  let component: HistoricoAsistenciaPage;
  let fixture: ComponentFixture<HistoricoAsistenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoAsistenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
