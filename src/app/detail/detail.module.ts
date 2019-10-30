import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DetailPageRoutingModule } from './detail-routing.module';
import { DetailPage } from './detail.page';
//import { AccountMapPage } from '../account-map/account-map.page';
//import { GetDirectionPage } from '../get-direction/get-direction.page';


const routes: Routes = [
  {
    path: '',
    component: DetailPage
  },
  {
    path: '',
 //   component: AccountMapPage
  },
  {
    path: '',
  /////  component: GetDirectionPage
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailPage
  //  ,AccountMapPage,GetDirectionPage
  ]
})
export class DetailPageModule {}
