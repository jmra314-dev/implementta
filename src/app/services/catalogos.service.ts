import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
tareasAbogado: any
  constructor() { this.setTareasAbogado() }
  setTareasAbogado(){
    this.tareasAbogado =[
      {idTarea : 13, idEstatus : 4,tarea : 'Entregar citatorio para inspección'},
      {idTarea : 14, idEstatus : 4,tarea : 'Realizar visita de inspección '},
      {idTarea : 18, idEstatus : 4,tarea : 'Multar por restricción infringida'},
      {idTarea : 19, idEstatus : 4,tarea : 'Informar cambio de uso identificado'},
      {idTarea : 20, idEstatus : 4,tarea : 'Notificar la determinacion por correo certificado'},
      {idTarea : 21, idEstatus : 4,tarea : 'Citatorio para requerimiento de pago y embargo'},
      {idTarea : 22, idEstatus : 4,tarea : 'Requerimiento de pago y embargo'},
      {idTarea : 23, idEstatus : 4,tarea : 'Citatorio para determinacion de credito'},
      {idTarea : 24, idEstatus : 4,tarea : 'Avaluo'},
      {idTarea : 25, idEstatus : 4,tarea : 'Notificacion de determinacion de credito'},
      {idTarea : 26, idEstatus : 4,tarea : 'Notificacion de avaluo'},
      {idTarea : 27, idEstatus : 4,tarea : 'Inscripcion de embargo en el RPPyC'},
      {idTarea : 28, idEstatus : 4,tarea : 'Publicacion de edictos'},
      {idTarea : 29, idEstatus : 4,tarea : 'Remate-adjudicacion-enajenacion fuera de subasta'},
      {idTarea : 30, idEstatus : 4,tarea : 'Adjudicación'},
      {idTarea : 31, idEstatus : 4,tarea : 'Contestar demanda'},
      {idTarea : 32, idEstatus : 4,tarea : 'Dar seguimiento a demanda'},
      {idTarea : 33, idEstatus : 4,tarea : 'Revisar resolución'},
      {idTarea : 34, idEstatus : 4,tarea : 'Presentar recurso de revisión'},
      {idTarea : 41, idEstatus : 4,tarea : 'Pagado al corriente'},
      {idTarea : 42, idEstatus : 4,tarea : 'No localizable'},
      {idTarea : 43, idEstatus : 4,tarea : 'Cuenta de gobierno'},
      {idTarea : 44, idEstatus : 4,tarea : 'Por instrucciones del cliente'},
      {idTarea : 45, idEstatus : 4,tarea : 'Investigar en RPP'},


    ]
  }
  getTareasAbogado(){
    return this.tareasAbogado
  }
}
