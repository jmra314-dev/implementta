import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncPagePage } from './sync-page.page';

describe('SyncPagePage', () => {
  let component: SyncPagePage;
  let fixture: ComponentFixture<SyncPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
