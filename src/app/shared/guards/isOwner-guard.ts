import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthserviceService } from "src/app/user/authservice.service";

@Injectable()

export class isOwner implements CanActivate {
    constructor(private authService: AuthserviceService, private router: Router) {}


    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authService.user?.themes.find(x => x == route.params['id'])) {  
            return true;
        }else {      
            this.router.navigate(["/"]);
            return false;
        }
    }

}