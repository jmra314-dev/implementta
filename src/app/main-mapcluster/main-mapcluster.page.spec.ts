import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMapclusterPage } from './main-mapcluster.page';

describe('MainMapclusterPage', () => {
  let component: MainMapclusterPage;
  let fixture: ComponentFixture<MainMapclusterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMapclusterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMapclusterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
