import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //URL_BASE = "https://testnovagym2024.pythonanywhere.com";
  URL_BASE = "http://127.0.0.1:8000";

  URL_API = this.URL_BASE + "/api/";
  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  postLogin(data) {
    return this.http.post(this.URL_API + "login/", data)
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  postRegister(data){
    return this.http.post(this.URL_API + "registrarse/", data)
  }
}
