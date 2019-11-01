import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Observable } from 'rxjs';
import { user } from '../Models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API:string = 'https://api.github.com/users'
  constructor(private http:HttpClient) {}

  getAll():Observable<user[]>{
  return this.http.get<user[]>(this.API)
  }
}
