import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.page.html',
  styleUrls: ['./graphics.page.scss'],
})
export class GraphicsPage implements OnInit {

  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {
  
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }


}


