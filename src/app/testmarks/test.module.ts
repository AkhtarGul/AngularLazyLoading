import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TestmarksComponent } from './testmarks.component';
import { TestlistComponent } from './testlist/testlist.component';
import { TestRoutingModule } from './test-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule,  FormsModule, TestRoutingModule],
  declarations: [TestmarksComponent, TestlistComponent],
  // bootstrap: [AppComponent],
})
export class TestModule {}
