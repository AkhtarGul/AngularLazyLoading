import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

// import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.auth.getToken();
    const url = '/token/verify/';

    if (!token) {
      this.router.navigate(['/welcome']);
      return false;
    }

    return this.auth.verifyToken().pipe(
      tap((allowed) => {
        if (!allowed) this.router.navigate(['/welcome']);
      })
    );
  }
}
