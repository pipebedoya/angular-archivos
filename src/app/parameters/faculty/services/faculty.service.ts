import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Faculty } from '../interfaces/faculty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private academicUrl: string = environment.academicUrl;
  
  constructor( private http: HttpClient ) { }

  createFaculty(nombre:string):Observable<Faculty>{
    const url = `${this.academicUrl}/facultades`;
    const body = {nombre};
    return this.http.post<Faculty>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getFaculty():Observable<Faculty[]>{
    const url = `${this.academicUrl}/facultades`
    return this.http.get<Faculty[]>(url);
  }

  getFacultyById(id:number):Observable<Faculty>{
    const url = `${this.academicUrl}/facultades/${id}`
    return this.http.get<Faculty>(url);
  }

  updateFaculty(faculty: Faculty):Observable<Faculty>{
    const url = `${this.academicUrl}/facultades/${faculty.id}`
    return this.http.put<Faculty>(url, faculty,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteFaculty(id:number):Observable<any>{
    const url = `${this.academicUrl}/facultades/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }
}
