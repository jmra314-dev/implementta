import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-historico-asistencia',
  templateUrl: './historico-asistencia.page.html',
  styleUrls: ['./historico-asistencia.page.scss'],
})
export class HistoricoAsistenciaPage implements OnInit {
infoAsistencia:any
  constructor(private service : RestService,private storage : Storage, private modalCtrl : ModalController) { }

  ngOnInit() {
    this.getInfo();
  }
async getInfo(){
  let idUser = await this.storage.get("IdUserChecador")
  console.log(idUser)
  this.infoAsistencia = await this.service.getInfoAsistencia(idUser)
  console.log(this.infoAsistencia)
}
exit(){
  this.modalCtrl.dismiss();
}
}
