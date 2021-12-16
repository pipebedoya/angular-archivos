import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../interfaces/state.interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private academicUrl: string = environment.academicUrl;
  
  constructor( private http: HttpClient ) { }

  createState(nombre:string):Observable<State>{
    const url = `${this.academicUrl}/estados`;
    const body = {nombre};
    return this.http.post<State>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getState():Observable<State[]>{
    const url = `${this.academicUrl}/estados`
    return this.http.get<State[]>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  getStateById(id:number):Observable<State>{
    const url = `${this.academicUrl}/estados/${id}`
    return this.http.get<State>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  updateState(State: State):Observable<State>{
    const url = `${this.academicUrl}/estados/${State.id}`
    return this.http.put<State>(url, State,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteState(id:number):Observable<any>{
    const url = `${this.academicUrl}/estados/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }
}
