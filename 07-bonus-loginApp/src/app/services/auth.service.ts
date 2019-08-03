import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../Models/usuario.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Create
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url = "https://identitytoolkit.googleapis.com/v1/accounts";
  private apiKey = "AIzaSyBAoYWsFAlpNYQDj3w_P7fypWjHJ5HH3eA";
  idToken: string;
  constructor(private http: HttpClient) {
    this.readToken();
  }
  logout() {
    localStorage.removeItem("token");
  }
  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http
      .post(`${this.url}:signInWithPassword?key=${this.apiKey}`, authData)
      .pipe(
        map(resp => {
          this.saveToken(resp["idToken"]);
          return resp;
        })
      );
  }
  create(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http
      .post(`${this.url}:signUp?key=${this.apiKey}`, authData)
      .pipe(
        map(resp => {
          this.saveToken(resp["idToken"]);
          return resp;
        })
      );
  }

  private saveToken(tokenId: string) {
    this.idToken = tokenId;
    localStorage.setItem("token", tokenId);

    const hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem("expira", hoy.getTime().toString());
  }
  readToken() {
    if (localStorage.getItem("token")) {
      this.idToken = localStorage.getItem("token");
    } else {
      this.idToken = "";
    }
  }
  isAuthenticated() {
    if (this.idToken.length < 2) {
      return false;
    }
    const expira = Number(localStorage.getItem("expira"));

    if (new Date(expira) > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
