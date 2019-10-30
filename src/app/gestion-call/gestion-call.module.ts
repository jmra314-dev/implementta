import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { GestionCallPage } from './gestion-call.page';

const routes: Routes = [
  {
    path: '',
//    component: GestionCallPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
 // declarations: [GestionCallPage]
})
export class GestionCallPageModule {}
