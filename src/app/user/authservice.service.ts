import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { iUser } from '../shared/interfaces';

@Injectable()

export class AuthserviceService {

  user: iUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user
  }

  get userReturn(): iUser | null | undefined {
    return this.user;
  }


  constructor(
    private http: HttpClient,
  ) { }

  login(email: String, password: String) {
    return this.http.post<iUser>("http://localhost:3000/api/login", {email, password}, {withCredentials: true}).pipe(
      tap((user) => {
        this.user = user,
        localStorage.setItem("user", JSON.stringify(user));
      })
    )
  };

  getProfileInfo() { 
    return this.http.get<iUser>("http://localhost:3000/api/users/profile", { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    )
  }

  editProfileInfo(email: String, username: String) {
    return this.http.put<iUser>("http://localhost:3000/api/users/profile", {email, username}, { withCredentials: true });
  }


  register(email: String, username: String, password: String) {
    return this.http.post<iUser>("http://localhost:3000/api/register", {email, username, password}, {withCredentials: true}).pipe(
      tap((user) => {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(user));
      })
      
    );
  };

  logout = () => {
    return this.http.post("http://localhost:3000/api/logout", {}, { withCredentials: true }).pipe(
      tap(() => {
        this.user = null
        localStorage.removeItem("user");
      })
    );
  }
}





