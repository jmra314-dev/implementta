import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

declare var google;
@Component({
  selector: 'app-account-map-list',
  templateUrl: './account-map-list.page.html',
  styleUrls: ['./account-map-list.page.scss'],
})
export class AccountMapListPage implements OnInit {
  @ViewChild('map1') mapContainer: ElementRef;
  loading: any;
  Data : any
  map: any;
mapEle : HTMLElement;
  constructor(public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,private route : ActivatedRoute, private router : Router) {

      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.Data = this.router.getCurrentNavigation().extras.state.position;
          console.log(this.Data)
        }
      });

     }


    async ngOnInit() {
     // let position = this.navParams.get('position');
     this.loadMap()
     }
     
     loadMap(){
       let myLatLng = {lat: parseFloat(this.Data.lat), lng:parseFloat(this.Data.lng)};
       console.log(myLatLng)
       this.mapEle = document.getElementById('map1');
     
       this.map = new google.maps.Map(this.mapEle, {
         center: myLatLng,
         disableDefaultUI: false,
      
         zoom: 16
       });
   var image ='https://s3.amazonaws.com/estrategas/icons-incidences/pin5.png';
       var marker = new google.maps.Marker({
         map:this.map,
         draggable: false,
         icon : image,
        // animation: google.maps.Animation.DROP,
         position: myLatLng
       });
      
       this.mapEle.classList.add('show-map');
       
      
     }
}
