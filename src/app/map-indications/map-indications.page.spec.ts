import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapIndicationsPage } from './map-indications.page';

describe('MapIndicationsPage', () => {
  let component: MapIndicationsPage;
  let fixture: ComponentFixture<MapIndicationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapIndicationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapIndicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
