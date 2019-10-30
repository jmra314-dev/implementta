import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.page.html',
  styleUrls: ['./ver-perfil.page.scss'],
})
export class VerPerfilPage implements OnInit {
  @ViewChild('passwordEyeRegister') passwordEye;
nombre : string
username : string
rol: string
plaza : string;
imei: string;
fecha:string;
contra :string
passwordTypeInput  =  'password';
iconpassword  =  'eye-off';
  constructor( private storage : Storage, private modalCtrl : ModalController) { }

  async ngOnInit() {
    await this.getData();
  }
  togglePasswordMode() {
    this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password'  :  'text';
    this.iconpassword  =  this.iconpassword  ===  'eye-off'  ?  'eye'  :  'eye-off';
    this.passwordEye.el.setFocus();
}
async getData(){
this.nombre = await this.storage.get('Nombre');
this.rol = await this.storage.get('Rol');
this.username = await this.storage.get('Email');
this.plaza = await this.storage.get('Plaza');
this.imei = await this.storage.get('IMEI')
this.fecha = await this.storage.get('LastSession');
this.contra = await this.storage.get('Password')

console.log(this.nombre,this.username,this.rol,this.plaza)
}
close(){
  this.modalCtrl.dismiss();
}
}
