import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TodoitemsComponent } from './todoitems.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoRoutingModule } from './todo-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [  CommonModule, FormsModule, TodoRoutingModule],
  declarations: [TodoitemsComponent, TodolistComponent],
})
export class TodoModule {}
