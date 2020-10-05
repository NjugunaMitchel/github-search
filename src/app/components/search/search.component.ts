import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main-service/main.service';
;


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
 

  constructor( private mainService:MainService) { }
  ngOnInit() {
    
  }
  username:any;
  user:any;
  repos:any;
  avatar:any;
  following: any;
  location: any;
  created_at: any;
  followers:any;
  
  getUser(){
    this.mainService.updateusername(this.username)
      

      this.mainService.getData()
      .subscribe(user =>
       {
         this.user = user
       });

       this.mainService.getRepos().subscribe(repos =>{
       this.repos = repos;
     })
     
     
   }
   
  }




