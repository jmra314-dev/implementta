import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { SyncUpdatePage } from './sync-update.page';

const routes: Routes = [
  {
    path: '',
  //  component: SyncUpdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
 //declarations: [SyncUpdatePage]
})
export class SyncUpdatePageModule {}
