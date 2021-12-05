import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts.component';
import { PostslistComponent } from './postslist/postslist.component';
// import { CommentsComponent } from './comments.component';
// import { CommentlistComponent } from './commentlist/commentlist.component';
import { PostRoutingModule } from './posts-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [  CommonModule, FormsModule, PostRoutingModule],
  declarations: [PostsComponent, PostslistComponent],
  // bootstrap: [AppComponent],
})
export class PostModule {}
