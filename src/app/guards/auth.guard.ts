import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import {Router} from '@angular/router'
import { ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(private AFauth : AngularFireAuth, public router : Router, public toastCtrl: ToastController,){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

     return this.AFauth.authState.pipe(map(auth=>{
       if(isNullOrUndefined(auth)){
        this.showToast('Inicia sesión para comenzar la gestión');
         this.router.navigate(['/login']);
       }else{
        return true;
       }
       
      }))

    }

    async showToast(message: string) {
      let toast = await this.toastCtrl.create({
        message: message,
        duration: 1000,
        position: 'top'
      });
  
      toast.present();
    } 
  
}
