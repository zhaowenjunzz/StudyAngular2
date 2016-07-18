import {Router, CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs/Observable";

import {Injectable} from "@angular/core";

@Injectable()
export class CanActivateGuard implements CanActivate {

    constructor(
        private _router: Router
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("canActivate called!");
        console.log(state.url);
        if (state.url.endsWith("fff")) {
            this._router.navigate(["hello"]);
            return false;
        }
        return true;
    }
};

export interface ICanComponentDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class CanDeactivateGuard implements CanDeactivate<ICanComponentDeactivate> {
    public canDeactivate(component: ICanComponentDeactivate): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
