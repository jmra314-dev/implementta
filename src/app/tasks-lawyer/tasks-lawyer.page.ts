import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../services/catalogos.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tasks-lawyer',
  templateUrl: './tasks-lawyer.page.html',
  styleUrls: ['./tasks-lawyer.page.scss'],
})
export class TasksLawyerPage implements OnInit {
tareasAbogado : any
  constructor(private taskService : CatalogosService,private modalController : ModalController) { }

  ngOnInit() {
    this.getTareasAbogado()
  }
getTareasAbogado(){
this.tareasAbogado = this.taskService.getTareasAbogado();
}
exit(idTarea:number,tarea:string){
  console.log('Trata de salir')
  this.modalController.dismiss({idTarea,tarea})
}
}
