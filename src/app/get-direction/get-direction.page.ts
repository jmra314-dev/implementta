import { Component, OnInit } from '@angular/core';
import {Geolocation} from  '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-get-direction',
  templateUrl: './get-direction.page.html',
  styleUrls: ['./get-direction.page.scss'],
})
export class GetDirectionPage implements OnInit {
latitud:number = 0
longitud:number = 0
res:any[]
countryName:string=''
postalCode:string=''
administrativeArea:string=''
locality:string=''
subLocality:string=''
thoroughfare:string=''
subThoroughfare:string=''

  constructor(private geolocation : Geolocation,private nativeGeocoder: NativeGeocoder) { }

async  ngOnInit() {
   await this.getPosition()
  }

getPosition(){
  this.geolocation.getCurrentPosition().then(response => {
    console.log(response)
    this.latitud = response.coords.latitude;
    this.longitud = response.coords.longitude;
  })
  .catch(error =>{
    console.log(error);
  })
}
refreshPosition(){
  this.getPosition();
}

getDirection(){
  let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
};

this.nativeGeocoder.reverseGeocode(this.latitud, this.longitud, options)
  .then((result: NativeGeocoderResult[]) => {
    this.countryName = result[0].countryName
    this.postalCode = result[0].postalCode
    this.administrativeArea= result[0].administrativeArea
    this.locality= result[0].locality
    this.subLocality= result[0].subLocality
    this.thoroughfare= result[0].thoroughfare
    this.subThoroughfare= result[0].subThoroughfare
  }
//  console.log(JSON.stringify(result[0]))
  )

  .catch((error: any) => console.log(error));

this.nativeGeocoder.forwardGeocode('Texcoco, estado de mexico', options)
  .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
  .catch((error: any) => console.log(error));

}
}
