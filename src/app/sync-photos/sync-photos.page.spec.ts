import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncPhotosPage } from './sync-photos.page';

describe('SyncPhotosPage', () => {
  let component: SyncPhotosPage;
  let fixture: ComponentFixture<SyncPhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncPhotosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
