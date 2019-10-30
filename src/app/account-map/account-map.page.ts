import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingController, ToastController, NavParams } from '@ionic/angular';
declare var google;
@Component({
  selector: 'app-account-map',
  templateUrl: './account-map.page.html',
  styleUrls: ['./account-map.page.scss'],
})
export class AccountMapPage implements OnInit {
  @ViewChild('mapa') mapContainer: ElementRef;
//  map: GoogleMap;
  loading: any;
  Data : any
  map: any;
mapEle : HTMLElement;

  constructor(public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private navParams:  NavParams) {

     }

  async ngOnInit() {
   let position = this.navParams.get('position');
  this.loadMap(position)
  }


  loadMap(position){
    let myLatLng = {lat: parseFloat( position.lat), lng:parseFloat(position.lng)};
    console.log(myLatLng)
    this.mapEle = document.getElementById('mapa');
  
    this.map = new google.maps.Map(this.mapEle, {
      center: myLatLng,
      disableDefaultUI: false,
   
      zoom: 16
    });
var image ='https://s3.amazonaws.com/estrategas/icons-incidences/pin3.png';
    var marker = new google.maps.Marker({
      map:this.map,
      draggable: false,
      icon : image,
      animation: google.maps.Animation.DROP,
      position: myLatLng
    });
   
    this.mapEle.classList.add('show-map');
    
   
  }

}
