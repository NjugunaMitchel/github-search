import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';  
import { Mainclass } from '../main-class/mainclass';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class MainService {
  repos: any;
   private username = 'mishel254';
   giturl:'https://api.github.com/users/'
   private apikey ='817524962c7021c10455fbc8a92a4c866174a972'

  private _url:string =('https://api.github.com/users/' + this.username + '?access_token=' + this.apikey);

  private _urlRepo = ('https://api.github.com/users/' + this.username + '/repos?/access_token=' + this.apikey);


  constructor(private http: HttpClient) { }
 
  getDisplay():Observable<any>{
    return this.http.get<any>(this._url) 
    
  }

  getData():Observable<any>{
    return this.http.get<any>(this._url)
    
  }

  getRepos(){
    return this.http.get<any>(this._urlRepo)
  }


  updateusername(username:string){
    this.username = username;
  }
  
}
