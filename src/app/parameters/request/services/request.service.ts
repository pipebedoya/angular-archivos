import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../interfaces/request.interface';
import { UploadedFile } from '../interfaces/uploaded.file.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  //?filter={"include":[{"relation":"idtiposolicitud"},{"relation":"idmodalidad"},{"relation":"idestado"},{"relation":"idareainvestigacion"}]}

  private academicUrl: string = environment.academicUrl;
  private tk: string = "";
  
  constructor( private http: HttpClient,
    private localStorageService: LocalStorageService) { 
      this.tk = this.localStorageService.getToken()   }

  createRequest(data: any):Observable<any>{
    const url = `${this.academicUrl}/solicitudes`;
    return this.http.post<Request>(url,data,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  createRequestProponent(data:any):Observable<any>{
    const url = `${this.academicUrl}/proponentexsolicitudes`;
    return this.http.post(url,data);
  }

  getRequest():Observable<Request[]>{
    const url = `${this.academicUrl}/solicitudes?filter={"include":[{"relation":"idtiposolicitud"},{"relation":"idmodalidad"},{"relation":"idestado"},{"relation":"idareainvestigacion"}]}`
    return this.http.get<Request[]>(url);
  }

  getRequestById(id:number):Observable<Request>{
    const url = `${this.academicUrl}/solicitudes/${id}`
    return this.http.get<Request>(url);
  }

  updateRequest(Request: Request):Observable<Request>{
    const url = `${this.academicUrl}/solicitudes/${Request.id}`
    return this.http.put<Request>(url, Request,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteRequest(id:number):Observable<any>{
    const url = `${this.academicUrl}/solicitudes/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  UploadDocument(form: FormData): Observable<UploadedFile>{
    return this.http.post<UploadedFile>(`${this.academicUrl}/CargarDocumentoPersona`,
   form,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
   }

}
