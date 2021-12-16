import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bonding } from '../interfaces/bonding.interface';

@Injectable({
  providedIn: 'root'
})
export class BondingService {

  private academicUrl: string = environment.academicUrl;

  constructor( private http: HttpClient ) { }

  createBonding(nombre:string):Observable<Bonding>{
    const url = `${this.academicUrl}/tipovinculaciones`;
    const body = {nombre};
    return this.http.post<Bonding>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getBonding():Observable<Bonding[]>{
    const url = `${this.academicUrl}/tipovinculaciones`
    return this.http.get<Bonding[]>(url);
  }

  getBondingById(id:number):Observable<Bonding>{
    const url = `${this.academicUrl}/tipovinculaciones/${id}`
    return this.http.get<Bonding>(url);
  }

  updateBonding(Bonding: Bonding):Observable<Bonding>{
    const url = `${this.academicUrl}/tipovinculaciones/${Bonding.id}`
    return this.http.put<Bonding>(url, Bonding,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteBonding(id:number):Observable<any>{
    const url = `${this.academicUrl}/tipovinculaciones/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }


}
