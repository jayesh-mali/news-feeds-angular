import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginAPI, signupAPI, logoutAPI } from '../constants/app-config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginData: Object): Observable<any> {
    return this.httpClient.post(loginAPI, loginData, { observe: 'response' });
  }

  signup(loginData: Object): Observable<any> {
    return this.httpClient.post(signupAPI, loginData);
  }

  logout(): Observable<any> {
    return this.httpClient.delete(logoutAPI);
  }

  setAuthorizationToken(headers: any) {
    localStorage.setItem('access-token',headers.get("Access-Token"));
    localStorage.setItem('token-type',headers.get("Token-Type"));
    localStorage.setItem('client',headers.get("Client"));
    localStorage.setItem('expiry',headers.get("Expiry"));
    localStorage.setItem('uid',headers.get("Uid"));
  }

  resetLocalStorage(){
    localStorage.clear();
  }

  setUserInformation(data:any){
    localStorage.setItem('name',data.name);
    localStorage.setItem('roles',data.user_roles);
  }

  // logout(loginData: Object): Observable<any> {
  //   return this.httpClient.post(loginAPI, loginData);
  // }

}
