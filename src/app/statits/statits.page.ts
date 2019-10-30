import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-statits',
  templateUrl: './statits.page.html',
  styleUrls: ['./statits.page.scss'],
})
export class StatitsPage implements OnInit {
infoAccount : any
  total: number
  deudaTotal: number
  totalPagadas: number
  totalGestionadas: number
  faltantes: number;
  constructor(private service :RestService) { }

  ngOnInit() {
    this.getInfo()
  }

  async getInfo(){
    this.total = await this.getTotalAccounts();
    this.deudaTotal = await this.getTotalAccountsDebt();
    this.totalPagadas = await this.getTotalAccountsPaid();
    this.totalGestionadas = await this.getTotalAccountsManagded();
    this.faltantes = this.total - this.totalGestionadas

  }

  async getTotalAccounts(){
  return  this.service.getTotalaccounts();
    }
  async getTotalAccountsManagded(){
  return  this.service.getTotalaccountsManagded();
  }
  async getTotalAccountsPaid(){
   return this.service.getTotalAccountsPaid();
  }
  async getTotalAccountsDebt(){
   return this.service.getTotalAccountsDebt();
  }
}
