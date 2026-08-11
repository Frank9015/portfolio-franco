import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'https://lushoooc.pythonanywhere.com/api/login/'; // URL de autenticación en tu API

  constructor(private http: HttpClient) {}

  async login(username: string, password: string) {
    try {
      const response = await this.http
        .post(this.authUrl, { username, password })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
}
