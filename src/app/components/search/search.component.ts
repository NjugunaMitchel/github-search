import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/main-service/display.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 username = 'mishel254';
 user:any;
  repos:any;
  avatar:any;
  following: any;
  location: any;
  created_at: any;
  followers:any;

  constructor( private DisplayService:DisplayService) { }
  ngOnInit() {
    
  }
  getUser(){
    this.DisplayService.updateusername(this.username);
      
      this.DisplayService.getData()
      .subscribe(user =>
       {
         
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

       this.DisplayService.getRepos().subscribe(repos =>{
       this.repos = repos;
     }) 
   }
   
  }




