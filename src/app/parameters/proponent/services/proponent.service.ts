import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proponent } from '../interfaces/proponent.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProponentService {

  private academicUrl: string = environment.academicUrl;
  constructor( private http: HttpClient ) { }

  getProponentById(id: number):Observable<Proponent>{
    return this.http.get<Proponent>(`${this.academicUrl}/proponentes/${id}`);
  }

  getProponent():Observable<Proponent[]>{
    return this.http.get<Proponent[]>(`${this.academicUrl}/proponentes?filter={"include":[{"relation":"idtipovinculacion"}]}`,{ headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }
  createProponent( documento: string, primer_nombre: string, otros_nombres: string, primer_apellido: string, segundo_apellido: string, correo: string, celular: string,id_tipovinculacion: number): Observable<Proponent>{
    const url = `${this.academicUrl}/proponentes`
    const body = {documento, primer_nombre, otros_nombres, primer_apellido, segundo_apellido, correo, celular,id_tipovinculacion}
    return this.http.post<Proponent>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})

    /* const body= {nombre,apellido,correo,celular}
    return this.http.post<Proponent>(`${this.academicUrl}/proponentes`,{ body },{ headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`}) }) */
  }
  deleteProponent(id:number):Observable<any>{
    console.log('desde servicio',id);
    const url = `${this.academicUrl}/proponentes/${id}`
    return this.http.delete<any>(url)
  }
  updateProponent(data: Proponent):Observable<Proponent>{
    const url = `${this.academicUrl}/proponentes/${data.id}`
    return this.http.put<Proponent>(url,data,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  // getRol():Observable<Rol[]>{
    
  //   return this.http.get<Rol[]>(`${this.academicUrl}/roles`,{ headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  //   /* ?filter={"fields":["nombre"]} */
  // }
  /* createProponentxRol(id_rol:number, id_usuario:number):Observable<Rol>{
    const url = `${this.academicUrl}/usuarioxroles`
    const body = {id_usuario,id_rol}
    return this.http.post<Rol>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  } */
}
