import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthserviceService } from "src/app/user/authservice.service";


@Injectable()

export class isAuth implements CanActivate{

    constructor(private router: Router, private authService: AuthserviceService) { }

    test: boolean = false;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if(route.data['loginRequired'] == true) {
            if(localStorage.getItem("user")) {
                return true;
            }else {
                this.router.navigate(["/"]);
                return false;
            }
        }
        else {
            if(localStorage.getItem("user")) {
                this.router.navigate(["/"]);
                return false;
            }else {
                return true;
            }
        }


    }

}