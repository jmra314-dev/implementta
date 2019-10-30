import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { GestionReductorPage } from './gestion-reductor.page';

const routes: Routes = [
  {
    path: '',
  //  component: GestionReductorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
//  declarations: [GestionReductorPage]
})
export class GestionReductorPageModule {}
