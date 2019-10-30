import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { HistoricoAsistenciaPage } from './historico-asistencia.page';

const routes: Routes = [
  {
    path: '',
    //component: HistoricoAsistenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
 // declarations: [HistoricoAsistenciaPage]
})
export class HistoricoAsistenciaPageModule {}
