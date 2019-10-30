import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RestService } from '../services/rest.service'
import { ModalController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-gestion-call',
  templateUrl: './gestion-call.page.html',
  styleUrls: ['./gestion-call.page.scss'],
})
export class GestionCallPage implements OnInit {
  infoAccount: any[];

  constructor( private storage :Storage, private service : RestService, private modalController : ModalController) { }

  ngOnInit() {
    this.getInfoAccount();
  }

  async getInfoAccount(){
    let account = await this.storage.get("accountNumber")
    console.log("this is the account to be proccessed")
    this.infoAccount = await this.service.getInfoAccount(account)
  }
  exit(){
    this.modalController.dismiss();
  }
}
