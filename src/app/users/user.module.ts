import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [  CommonModule, FormsModule, UserRoutingModule],
  declarations: [UsersComponent, UserlistComponent],
})
export class UserModule {}
