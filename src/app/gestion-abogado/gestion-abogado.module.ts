import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { GestionAbogadoPage } from './gestion-abogado.page';

const routes: Routes = [
  {
    path: '',
  //  component: GestionAbogadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
 // declarations: [GestionAbogadoPage]
})
export class GestionAbogadoPageModule {}
