import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { committee } from '../interfaces/committee.interface';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {

  private academicUrl: string = environment.academicUrl;
  
  constructor( private http: HttpClient ) { }

  createCommittee(nombre:string):Observable<committee>{
    const url = `${this.academicUrl}/tipocomites`;
    const body = {nombre};
    return this.http.post<committee>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getCommittee():Observable<committee[]>{
    const url = `${this.academicUrl}/tipocomites`
    return this.http.get<committee[]>(url);
  }

  getCommitteeById(id:number):Observable<committee>{
    const url = `${this.academicUrl}/tipocomites/${id}`
    return this.http.get<committee>(url);
  }

  updateCommittee(committee: committee):Observable<committee>{
    const url = `${this.academicUrl}/tipocomites/${committee.id}`
    return this.http.put<committee>(url, committee,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteCommittee(id:number):Observable<any>{
    const url = `${this.academicUrl}/tipocomites/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }
}
