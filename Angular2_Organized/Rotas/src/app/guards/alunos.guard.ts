import { Injectable } from "@angular/core";
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { Observable } from "rxjs/Rx";

import { AuthService } from "../login/auth.service";


@Injectable()
export class AlunosGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean 
  {
      if(state.url.includes('editar'))
        return Observable.of(false);
    
      return true;
  }

}