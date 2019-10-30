import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { TasksLawyerPage } from './tasks-lawyer.page';

const routes: Routes = [
  {
    path: '',
  //  component: TasksLawyerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
 // declarations: [TasksLawyerPage]
})
export class TasksLawyerPageModule {}
