import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators'
import { of, Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResp, Respuesta, Usuario, Usuarioxrol, ValidacionToken } from '../interfaces/auth.interface'; 
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private adminUrl: string = environment.adminiUrl;
  private tokenUrl: string = environment.validarUrl;

  private _usuario!: ValidacionToken;
  private _respuesta!: AuthResp;
  private _idRol!: Usuarioxrol;

  get idRol () {
    return {...this._idRol}
  }

  get token() {
    return { ...this._respuesta }
  }

  get usuario() {
    return {...this._usuario};
  }

  constructor( private http: HttpClient,
               private localStorageService: LocalStorageService ) { }

  login ( usuario: string, clave: any ) {
    
    const url = `${this.adminUrl}/identificar-usuario`
    const body = { usuario, clave }
    //console.log(clave);

    return this.http.post<AuthResp>(url, body )
      .pipe(
        tap( resp => {
          if(resp.ok === true){
            localStorage.setItem('token', resp.tk!);
            //sessionStorage.setItem('id_rol',(resp.usuarioxrol?.id_rol!).toString());
            /* this._token = {
              tk: resp.tk
            },
            this._idRol={
              id_rol: resp.usuarioxrol?.id_rol
            }, */
            this._usuario = {
              ok: resp.ok!,
              data:{
                nombre: resp.usuario?.nombre,
                id_usuario: resp.usuarioxrol?.id_usuario,
                rol: resp.usuarioxrol?.id_rol
              }
            }
          }
        }),
        map( resp => resp.ok ),
        catchError (err => of(err.error.error.message))
      );
  }

  recuperarPass ( correo: string ) {
    const url = `${this.adminUrl}/recuperar-clave`
    const body = { correo }

    return this.http.post<Respuesta>(url,body)
      .pipe(
        tap ( resp => {
          if( resp.ok === true ){
             // TODO: no se que hacer aqui haha :v
          }
        }),
        map( resp => resp.ok ),
        catchError (err => of(err.error.error.message))
      );
  }

  validarToken(): Observable<boolean>{
    const url = `${this.adminUrl}/validacion`
    const token = localStorage.getItem('token'||"")
    const body = {token}
    //console.log('toke',token);
    //console.log('body',body);
    return this.http.post<ValidacionToken>(url,body)
      .pipe(

        map( resp => {
          //console.log(resp.token?.token);
          localStorage.setItem('token',resp.token?.token!)
          this._usuario = {
            ok: resp.ok!,
            data:{
              nombre: resp.data?.nombre,
              id_usuario: resp.data?.id_usuario,
              rol: resp.data?.rol
            }
          }
          return resp.ok!
        }),
        catchError( err => of(false) )
      )
  }

  logout(){
    localStorage.clear();
  }

}



