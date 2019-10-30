import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDirectionPage } from './get-direction.page';

describe('GetDirectionPage', () => {
  let component: GetDirectionPage;
  let fixture: ComponentFixture<GetDirectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDirectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDirectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
