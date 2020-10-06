import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';  
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisplayService {
   username='mishel254';
  private apikey ='817524962c7021c10455fbc8a92a4c866174a972'

  private _url='https://api.github.com/users/'+this.username+ '?access_token='+this.apikey;

  private _urlRepo ='https://api.github.com/users/'+this.username + '/repos?access_token='+this.apikey;

  constructor(private http: HttpClient){ }
  

  getData():Observable<any>{
    return this.http.get(this._url)
    
  }

  getRepos():Observable<any>{
    return this.http.get(this._urlRepo)
  }

  updateusername(username:string){
     return this.username = username;
   }
 }
