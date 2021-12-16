import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TRequest } from '../interfaces/t_request.interface';

@Injectable({
  providedIn: 'root'
})
export class TRequestService {

  private academicUrl: string = environment.academicUrl;
  
  constructor( private http: HttpClient ) { }

  createTRequest(nombre:string):Observable<TRequest>{
    const url = `${this.academicUrl}/tiposolicitudes`;
    const body = {nombre};
    return this.http.post<TRequest>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getTRequest():Observable<TRequest[]>{
    const url = `${this.academicUrl}/tiposolicitudes`
    return this.http.get<TRequest[]>(url);
  }

  getTRequestById(id:number):Observable<TRequest>{
    const url = `${this.academicUrl}/tiposolicitudes/${id}`
    return this.http.get<TRequest>(url);
  }

  updateTRequest(TRequest: TRequest):Observable<TRequest>{
    const url = `${this.academicUrl}/tiposolicitudes/${TRequest.id}`
    return this.http.put<TRequest>(url, TRequest,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteTRequest(id:number):Observable<any>{
    const url = `${this.academicUrl}/tiposolicitudes/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }
}
