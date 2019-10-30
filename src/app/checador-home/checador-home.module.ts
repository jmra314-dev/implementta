import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChecadorHomePage } from './checador-home.page';
import { HistoricoAsistenciaPage } from '../historico-asistencia/historico-asistencia.page';

const routes: Routes = [
  {
    path: '',
   component: ChecadorHomePage
  },
  {
    path: '',
   component: HistoricoAsistenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChecadorHomePage,HistoricoAsistenciaPage]
})
export class ChecadorHomePageModule {}
