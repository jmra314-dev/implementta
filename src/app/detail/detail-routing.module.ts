import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: '',
   component: DetailPage,
    children:
      [
        {
          path: 'account-detail',
          children:
            [
              {
                path: '',
                loadChildren: '../account-detail/account-detail.module#AccountDetailPageModule'
              }
            ]
        },
        {
          path: 'address-detail',
          children:
            [
              {
                path: '',
                loadChildren: '../address-detail/address-detail.module#AddressDetailPageModule'
              }
            ]
        },
        {
            path: 'photos-detail',
            children:
              [
                {
                  path: '',
                  loadChildren: '../photos-detail/photos-detail.module#PhotosDetailPageModule'
                }
              ]
          },
          {
            path: 'gestion-page',
            children:
              [
                {
                  path: '',
                  loadChildren: '../gestion-page/gestion-page.module#GestionPagePageModule'
                }
              ]
          },
   
        {
          path: '',
          redirectTo: '/detail/account-detail',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/detail/account-detail',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class DetailPageRoutingModule {}