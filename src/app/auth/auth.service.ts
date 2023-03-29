import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn=true;
  private isAdmin=true;
  constructor() { }

  isAuthenticated(){
    return this.isLoggedIn;
  }

  isRoleAdmin(){
    return this.isAdmin;
  }
}
