import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Rol } from '../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private adminUrl: string = environment.adminiUrl;
  private _rol!: Rol;

  get rol(){
    return {...this.getRol}
  }

  constructor( private http: HttpClient ) { }

  getUserById(id: number):Observable<User>{
    return this.http.get<User>(`${this.adminUrl}/usuarios/${id}`);
  }

  getUser():Observable<User[]>{
    return this.http.get<User[]>(`${this.adminUrl}/usuarios`,{ headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }
  createUser( nombre: String, apellido: String, correo: String, celular: String): Observable<User>{
    const url = `${this.adminUrl}/usuarios`
    const body = {nombre,apellido,correo,celular}
    return this.http.post<User>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})

    /* const body= {nombre,apellido,correo,celular}
    return this.http.post<User>(`${this.adminUrl}/usuarios`,{ body },{ headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`}) }) */
  }
  deleteUser(id:number):Observable<any>{
    console.log('desde servicio',id);
    const url = `${this.adminUrl}/usuarios/${id}/usuarioxrols`
    return this.http.delete<any>(url)
  }
  updateUser(data: User):Observable<User>{
    const url = `${this.adminUrl}/usuarios/${data.id}`
    return this.http.put<User>(url,data,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getRol():Observable<Rol[]>{
    
    return this.http.get<Rol[]>(`${this.adminUrl}/roles`,{ headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
    /* ?filter={"fields":["nombre"]} */
  }
  
  createUserxRol(id_rol:number, id_usuario:number):Observable<Rol>{
    const url = `${this.adminUrl}/usuarioxroles`
    const body = {id_usuario,id_rol}
    return this.http.post<Rol>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }


  
}

