import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { HomePage } from './home.page';
import {VerPerfilPage} from '../ver-perfil/ver-perfil.page';
import {UserAddPage} from '../user-add/user-add.page';
import { UsersConfigPage } from '../users-config/users-config.page';
import { SyncUpdatePage } from '../sync-update/sync-update.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    HomePageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },  
      {
        path: '',
        component: UserAddPage
      },

      {
        path: '',
        component: VerPerfilPage
      },
      {
        path: '',
        component: UsersConfigPage
      },
      {
        path: '',
        component: SyncUpdatePage
      }

    ])
  ],
  declarations: [HomePage,UserAddPage,VerPerfilPage,UsersConfigPage,SyncUpdatePage]
})
export class HomePageModule {}
