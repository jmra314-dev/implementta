import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sync-gestor',
  templateUrl: './sync-gestor.page.html',
  styleUrls: ['./sync-gestor.page.scss'],
})
export class SyncGestorPage implements OnInit {
accounts:any
rol : any
loading : any
  constructor(private service :RestService,private modalController : ModalController, private storage : Storage, private loadingCtrl : LoadingController) { }

  async ngOnInit() {
    this.rol = await this.storage.get('IdRol')
    console.log(this.rol)
   await this.getAccounts(this.rol)
  }
  async getAccounts(rol){
  if(rol=='2'){
    this.accounts = await this.service.getAccountsReadyToSyncAbogado()
    console.log(this.accounts)
  }else if(rol == '5'){
    this.accounts = await this.service.getAccountsReadyToSyncGestor()
    console.log(this.accounts)
  }else if(rol == '7'){
    this.accounts = await this.service.getAccountsReadyToSyncReductor()
    console.log(this.accounts)
  }

}
  async syncAccounts(){
    this.loading = await this.loadingCtrl.create({
      message: "Sincronizando al servidor de implementta...."
    });
    await this.loading.present();
    
  if(this.rol =='5'){
   await this.service.getAccoutsToSyncGestor();

   this.loading.dismiss();
  }else if(this.rol=='2'){
    await this.service.getAccoutsToSyncAbogado();
    await this.service.getAccoutsToSyncGestor();
  
    this.loading.dismiss();
  }else if(this.rol=='7'){
    await this.service.getAccoutsToSyncAbogado();
    await this.service.getAccoutsToSyncGestor();
    await this.service.getAccoutsToSyncReductor();
  this.loading.dismiss();}
  this.service.syncRecorrido();
  this.modalController.dismiss()
 
}
}
