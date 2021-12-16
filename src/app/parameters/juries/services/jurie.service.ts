import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jurie } from '../interfaces/jurie.interface';

@Injectable({
  providedIn: 'root'
})
export class JurieService {

  private academicUrl: string = environment.academicUrl;
  
  constructor( private http: HttpClient ) { }

  createJurie(nombre:string,celular:string,correo:string,entidad:string):Observable<Jurie>{
    const url = `${this.academicUrl}/jurados`;
    const body = {nombre,celular,correo,entidad};
    return this.http.post<Jurie>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getJurie():Observable<Jurie[]>{
    const url = `${this.academicUrl}/jurados`
    return this.http.get<Jurie[]>(url);
  }

  getJurieById(id:number):Observable<Jurie>{
    const url = `${this.academicUrl}/jurados/${id}`
    return this.http.get<Jurie>(url);
  }

  updateJurie(Jurie: Jurie):Observable<Jurie>{
    const url = `${this.academicUrl}/jurados/${Jurie.id}`
    return this.http.put<Jurie>(url, Jurie,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteJurie(id:number):Observable<any>{
    const url = `${this.academicUrl}/jurados/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }
}
