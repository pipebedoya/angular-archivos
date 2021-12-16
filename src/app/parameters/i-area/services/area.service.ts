import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from '../interfaces/area.interface';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private academicUrl: string = environment.academicUrl;
  
  constructor( private http: HttpClient ) { }

  createArea(nombre:string):Observable<Area>{
    const url = `${this.academicUrl}/areainvestigaciones`;
    const body = {nombre};
    return this.http.post<Area>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getArea():Observable<Area[]>{
    const url = `${this.academicUrl}/areainvestigaciones`
    return this.http.get<Area[]>(url);
  }

  getAreaById(id:number):Observable<Area>{
    const url = `${this.academicUrl}/areainvestigaciones/${id}`
    return this.http.get<Area>(url);
  }

  updateArea(Area: Area):Observable<Area>{
    const url = `${this.academicUrl}/areainvestigaciones/${Area.id}`
    return this.http.put<Area>(url, Area,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteArea(id:number):Observable<any>{
    const url = `${this.academicUrl}/areainvestigaciones/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }
}
