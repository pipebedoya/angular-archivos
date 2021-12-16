import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departament } from '../interfaces/departament.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private academicUrl: string = environment.academicUrl;
  
  constructor( private http: HttpClient ) { }

  createDepartament(nombre:string,id_facultad:number):Observable<Departament>{
    const url = `${this.academicUrl}/departamentos`;
    const body = {nombre,id_facultad};
    return this.http.post<Departament>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getDepartament():Observable<Departament[]>{
    const url = `${this.academicUrl}/departamentos?filter={"include":[{"relation":"idfacultad"}]}`
    return this.http.get<Departament[]>(url);
  }

  getDepartamentById(id:number):Observable<Departament>{
    const url = `${this.academicUrl}/departamentos/${id}?filter={"include":[{"relation":"idfacultad"}]}`
    return this.http.get<Departament>(url);
  }

  updateDepartament(nombre: string, id: number, id_facultad: number):Observable<Departament>{
    const url = `${this.academicUrl}/departamentos/${id}`
    const body = {nombre,id_facultad};
    return this.http.put<Departament>(url, body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  updateDepartaments(data: any):Observable<any>{
    console.log('servicio ',data);
    const url = `${this.academicUrl}/departamentos/${data.id}`
    return this.http.put<any>(url, data,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteDepartament(id:number):Observable<any>{
    const url = `${this.academicUrl}/departamentos/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }
  
}
