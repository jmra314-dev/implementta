import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDetailPage } from './photos-detail.page';

describe('PhotosDetailPage', () => {
  let component: PhotosDetailPage;
  let fixture: ComponentFixture<PhotosDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
