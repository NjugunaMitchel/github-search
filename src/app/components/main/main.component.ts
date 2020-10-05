import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainService } from 'src/app/main-service/main.service';
import { Mainclass } from 'src/app/main-class/mainclass';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  main:Mainclass;
  nam:string;

  username:string;
  user:any;
  repos:any;
  avatar:any;
  following: any;
  location: any;
  created_at: any;
  followers: any;
  
  
  constructor( private mainService:MainService) { }
  ngOnInit(){
      this.mainService.getDisplay().subscribe(user => {
      this.user = user.name
      this.username = user.login
      this.repos = user.repos_url
      this.avatar =user.avatar_url 
      this.location = user.location
      this.created_at = user.created_at
      this.followers = user.followers
      this.following = user. following
     /*  this.repos = user.repos_url */
      
     });

       this.mainService.getRepos().subscribe(repos =>{
       this.repos = repos
     })
   }

  
  /* 
   getUser(){
     this.mainService.updateuser(this.username)
      console.log(this.username)
     
     this.mainService.getData()
     .subscribe(data =>
      {
        console.log(data)
        this.user = data.login
        this.avatar = data.avatar_url
      })
    } */

      }
