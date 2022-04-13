import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthserviceService } from "src/app/user/authservice.service";

@Injectable()

export class isOwner implements CanActivate {
    constructor(private authService: AuthserviceService, private router: Router) {}


    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.authService.getProfileInfo().subscribe({
            next: (user) => this.authService.user = user
        });
        if(this.authService.userReturn?.themes.find(x => x._id == route.params['id'])) {
            return true;
        }else {      
            console.log(this.authService.user?.themes);
            this.router.navigate(["/"]);
            return false;
        }
    }

}