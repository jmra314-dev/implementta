import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { AuthService } from '../services/auth.service';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.scss'],
})
export class UserAddPage implements OnInit {
username : string =""
idplaza  :  string
userInfo : any;
password1 : string ="";
password2 : string ="";
loading: any
  constructor(private modalController : ModalController,
    private service : RestService, private authService : AuthService, private loadingCtrl : LoadingController,private mensaje : MessagesService) { }

  ngOnInit() {
  }
async userVerify(){
  console.log("los datos a consultar" + this.username," y " ,this.idplaza)
  if(this.username =="" || this.username == null){

    alert("Ingresa un usuario")
  }else{

  this.userInfo = await this.service.userVerify(this.username,this.idplaza)
  console.log(this.userInfo)
  if(this.userInfo.length == 0 ){
    alert("Verifica usuario y/o plaza :(")
  }
  }
}
async userCreate(){
  if(this.password1 !=""){ 

    if(this.password1 != this.password2){
      alert("Las contraseñas no coinciden, verifica por favor :(")
    }else{
let idaspuser = this.userInfo[0].idaspuser;
let idrol = this.userInfo[0].idrol;
let nombre = this.userInfo[0].nombre;
let user  = this.userInfo[0].usuario;
let rol = this.userInfo[0].rol;
let idplaza = this.idplaza;
let password = this.password1;
let plaza = this.userInfo[0].plaza;
let idUserChecador = this.userInfo[0].idUser
console.log(user,password,nombre,idplaza,idrol,idaspuser,rol)
this.loading = await this.loadingCtrl.create({
  message: 'Creando usuario...'
});
await this.loading.present(); 

this.authService.register(user,password,nombre,idplaza,idrol,idaspuser,rol,plaza,idUserChecador).then(res=>{

console.log(res)
  this. loading.dismiss();
  this.mensaje.showAlert("Usuario creado satisfactoriamente :)")
  
  this.close();
}).catch (err =>{
  
  this.loading.dismiss()
  alert(err)
})}
  }else{

    alert("Verifica todos los campos")
  }

}

close(){
  this.modalController.dismiss();
}
}
