import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoitemsComponent } from './todoitems.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {
    path: '',
    component: TodoitemsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: TodolistComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
