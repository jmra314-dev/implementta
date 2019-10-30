import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

  exit(){
    this.auth.logout();  
    navigator['app'].exitApp();
    }
}
