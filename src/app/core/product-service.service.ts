import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iCar } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }
  
  postTheme(data: FormData) {
    return this.http.post("http://localhost:3000/api/themes", data, { withCredentials: true });
  };

  getAll() {
    return this.http.get<iCar[]>("http://localhost:3000/api/themes");
  };
}