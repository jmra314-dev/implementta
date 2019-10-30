import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatitsPage } from './statits.page';

describe('StatitsPage', () => {
  let component: StatitsPage;
  let fixture: ComponentFixture<StatitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
