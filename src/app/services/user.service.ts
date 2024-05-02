import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000';

  constructor(private _http:HttpClient) { }

  getCarList(){
    return this._http.get(`${this.apiUrl}/cars`);

  }
}
