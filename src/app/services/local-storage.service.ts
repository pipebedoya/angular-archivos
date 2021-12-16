import { Injectable } from '@angular/core';
import { AuthResp } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveSessionData(data: AuthResp): boolean{
    let currentData = localStorage.getItem("session-info");
    if (currentData){
      return false
    }else{
      let sessionDataString = JSON.stringify(data.tk);
      localStorage.setItem("session-data",sessionDataString);
      return true;
    }
  }

  removeSessionData():boolean{
    let currentData = localStorage.getItem("session-info");
    if (currentData){
      localStorage.removeItem("session-info");
      return true;
    }else{
      return false;
    }
  }

  getToken():string{
    let currentData = localStorage.getItem("session-info");
    if (currentData){
      let sessionDataJson = JSON.parse(currentData);
      return sessionDataJson.tk
    }else{
      return "";
    }
  }
}