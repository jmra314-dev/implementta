import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMapPage } from './account-map.page';

describe('AccountMapPage', () => {
  let component: AccountMapPage;
  let fixture: ComponentFixture<AccountMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
