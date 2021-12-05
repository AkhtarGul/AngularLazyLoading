import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments.component';
import { CommentlistComponent } from './commentlist/commentlist.component';
import { CommentRoutingModule } from './comment-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [  CommonModule, FormsModule, CommentRoutingModule],
  declarations: [CommentsComponent, CommentlistComponent],
  // bootstrap: [AppComponent],
})
export class CommentModule {}
