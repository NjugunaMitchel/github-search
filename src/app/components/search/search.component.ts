import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main-service/main.service';
;


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username:any;
 

  constructor( private mainService:MainService) { }
  ngOnInit() {
    
  }
  
  user:any;
  repos:any;
  avatar:any;
  following: any;
  location: any;
  created_at: any;
  followers:any;
  
  getUser(){
    this.mainService.updateusername(this.username);
      
      this.mainService.getData()
      .subscribe(user =>
       {
         this.user = user;
         this.followers = user.followers
         this.user = user.name
          this.username = user.login
          this.repos = user.repos_url
          this.avatar =user.avatar_url 
          this.location = user.location
          this.created_at = user.created_at
          this.followers = user.followers
          this.following = user. following
       });

       this.mainService.getRepos().subscribe(repos =>{
       this.repos = repos;
     })
     
     
   }
   
  }




