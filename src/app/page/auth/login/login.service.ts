import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from './login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly http: HttpClient = inject(HttpClient)
  
  login(form: Login): Observable<any> {
    return this.http.post('http://localhost:8000/oauth/token', {
      'grant_type': 'password',
      'client_id': '9d6e319f-c428-433d-8340-dab8756da797',
      'client_secret': 'dn85iQkQwe4SVIvfmLGwveueTNlyF2LVBTCGSEX4',
      'username': form.username,
      'password': form.password,
      'scope': '',
    })
  }
}
