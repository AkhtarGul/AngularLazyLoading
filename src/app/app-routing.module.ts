import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { AuthService } from './auth-guard/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },

  {
    path: 'user',
    loadChildren: () => import('./users/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'todoitem',
    loadChildren: () =>
      import('./todoitems/todo.module').then((m) => m.TodoModule),

    canActivate: [AuthGuard],
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./testmarks/test.module').then((m) => m.TestModule),

    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostModule),

    canActivate: [AuthGuard],
  },
  {
    path: 'comment',
    loadChildren: () =>
      import('./comments/comments.module').then((m) => m.CommentModule),

    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
