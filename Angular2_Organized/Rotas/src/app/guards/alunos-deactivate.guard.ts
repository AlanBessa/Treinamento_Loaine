import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { IFormCanDeactivate } from "./iform-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

    canDeactivate(
        component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return component.podeDesativar() ? component.podeDesativar() : true;
    }

}