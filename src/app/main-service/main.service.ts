import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';  
import { Mainclass } from '../main-class/mainclass';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private _url:string = environment.giturl + name + environment.apikey

  constructor(private http: HttpClient) { }
 

  getData():Observable<any>{
    return this.http.get<any>(this._url);
  }
 
}
