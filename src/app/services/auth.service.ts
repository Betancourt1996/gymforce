import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL_BASE = "https://testnovagym2024.pythonanywhere.com";
  //URL_BASE = "http://127.0.0.1:8000";

  URL_API = this.URL_BASE + "/api/";
  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  getUser(): any | null {    
    let userJson = localStorage.getItem('user') || sessionStorage.getItem('user');
    return JSON.parse(userJson);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  postLogin(data) {
    return this.http.post(this.URL_API + "inicio-sesion/", data)
  }

  postRegister(data){
    return this.http.post(this.URL_API + "registrarse/", data)
  }
}
