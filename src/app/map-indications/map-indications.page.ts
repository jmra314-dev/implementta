import { Component, OnInit } from '@angular/core';
import {Geolocation} from  '@ionic-native/geolocation/ngx';
import { Router, ActivatedRoute } from '@angular/router';
declare var google
@Component({
  selector: 'app-map-indications',
  templateUrl: './map-indications.page.html',
  styleUrls: ['./map-indications.page.scss'],
})
export class MapIndicationsPage implements OnInit {
Data : any
  constructor(private geolocation : Geolocation,private router : Router, private route : ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.Data = this.router.getCurrentNavigation().extras.state.position;
        console.log(this.Data)
      }
    });
   }

  ngOnInit() {
    this.initMap()
  }

   async initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    const currentPosition = await this.geolocation.getCurrentPosition()
 
    var position = new google.maps.LatLng(currentPosition.coords.latitude, currentPosition.coords.longitude);
  
   var targetPosition = new google.maps.LatLng(this.Data.lat, this.Data.lng);
     console.log(position)
     console.log(targetPosition)
    var mapOptions = {
      zoom:7,
      center: position
    }
    var map = new google.maps.Map(document.getElementById('map-indications'), mapOptions);
    var request = {
      origin: position,
      destination: targetPosition,
      travelMode: 'WALKING'
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
      }
    });
    directionsDisplay.setMap(map);
  }


}
