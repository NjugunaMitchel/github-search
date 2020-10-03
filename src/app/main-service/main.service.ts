import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';  
import { Mainclass } from '../main-class/mainclass';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private _url:string ='https://api.github.com/users/daneden?access_token= + 817524962c7021c10455fbc8a92a4c866174a972';

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<Mainclass[]>(this._url);
  }
}
