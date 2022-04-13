import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthserviceService } from "src/app/user/authservice.service";


@Injectable()

export class isAuth implements CanActivate{

    constructor(private router: Router, private authService: AuthserviceService) { }

    test: boolean = false;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if(localStorage.getItem("user")) {
            this.router.navigate(["/"]);
            return false;
        }else {
            return true;
        }
       /* if(this.authService.isLogged) {
            return false;
        }else {
            return true;
        } */
    }

}