import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modality } from '../interfaces/modality.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalityService {

  private academicUrl: string = environment.academicUrl;
  
  constructor( private http: HttpClient ) { }

  createModality(nombre:string):Observable<Modality>{
    const url = `${this.academicUrl}/modalidades`;
    const body = {nombre};
    return this.http.post<Modality>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getModality():Observable<Modality[]>{
    const url = `${this.academicUrl}/modalidades`
    return this.http.get<Modality[]>(url);
  }

  getModalityById(id:number):Observable<Modality>{
    const url = `${this.academicUrl}/modalidades/${id}`
    return this.http.get<Modality>(url);
  }

  updateModality(Modality: Modality):Observable<Modality>{
    const url = `${this.academicUrl}/modalidades/${Modality.id}`
    return this.http.put<Modality>(url, Modality,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteModality(id:number):Observable<any>{
    const url = `${this.academicUrl}/modalidades/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

}
