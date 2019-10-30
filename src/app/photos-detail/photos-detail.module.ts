import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhotosDetailPage } from './photos-detail.page';
import {ImageModalPage} from '../image-modal/image-modal.page'

const routes: Routes = [
  {
    path: '',
    component: PhotosDetailPage
  },
  {
    path: '',
    component: ImageModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhotosDetailPage,ImageModalPage]
})
export class PhotosDetailPageModule {}
