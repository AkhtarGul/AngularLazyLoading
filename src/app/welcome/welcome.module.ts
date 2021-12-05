import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, WelcomeRoutingModule],
  declarations: [WelcomeComponent],
})
export class WelcomeModule {}
