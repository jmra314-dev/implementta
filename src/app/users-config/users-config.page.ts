import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { UsersFirebaseService } from '../services/users-firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-users-config',
  templateUrl: './users-config.page.html',
  styleUrls: ['./users-config.page.scss'],
})
export class UsersConfigPage implements OnInit {
  userInfo: any;

  constructor(private modalCtrl : ModalController,private db : AngularFirestore,
    private mensaje : MessagesService ,private usersFirebase : UsersFirebaseService,private alertController:AlertController) { }

  ngOnInit() {
    this.getUsers()
  }
exit(){
this.modalCtrl.dismiss()
}


getUsers(){
  this.usersFirebase.getUserInfo().subscribe(async user=>{
  this.userInfo = user
  console.log(this.userInfo)
})
}
  async deActivate(name,uid,isActive){

if(isActive){
  const alert = await this.alertController.create({
    header: 'Confirmar desactivación!',
    message: 'Desactivar cuenta de: <strong>'+name+'</strong>!!!',
    buttons: [
 {
        text: 'Aceptar',
        handler: () => {
          this.deActiveAccount(uid,isActive)
        }
      }
    ]
  });

  await alert.present();
}else{
  const alert = await this.alertController.create({
    header: 'Confirmar activación!',
    message: 'Activar cuenta de: <strong>'+name+'</strong>!!!',
    buttons: [
  {
        text: 'Aceptar',
        handler: () => {
        this.deActiveAccount(uid,isActive)
        }
      }
    ]
  });

  await alert.present();
}


}
deActiveAccount(uid,isActive){
isActive = !isActive
this.db.collection('usersImplementta').doc(uid).update({
  isActive : isActive
})
this.mensaje.showAlert('Acción completada')   
}
}
