import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncUpdatePage } from './sync-update.page';

describe('SyncUpdatePage', () => {
  let component: SyncUpdatePage;
  let fixture: ComponentFixture<SyncUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncUpdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
