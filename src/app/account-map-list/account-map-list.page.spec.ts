import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMapListPage } from './account-map-list.page';

describe('AccountMapListPage', () => {
  let component: AccountMapListPage;
  let fixture: ComponentFixture<AccountMapListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMapListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMapListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
