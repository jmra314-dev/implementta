import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { SyncGestorPage } from './sync-gestor.page';

const routes: Routes = [
  {
    path: '',
   // component: SyncGestorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
 // declarations: [SyncGestorPage]
})
export class SyncGestorPageModule {}
