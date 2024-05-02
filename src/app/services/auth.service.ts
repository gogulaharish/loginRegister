import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  register(user:User): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}/users`, user);
  }

  login(data:string):Observable<User[]>{
    return this._http.get<User[]>(`${this.apiUrl}/users?email=${data}`)
  }

}
