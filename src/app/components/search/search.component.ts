import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main-service/main.service';
import { Mainclass } from 'src/app/main-class/mainclass';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  mainService: any;

  constructor() { }

  ngOnInit(): void {
  }
  main:Mainclass;
  nam:string;

  username:string;
  user:any;
  repos:any;
  avatar:any;

  getUser(){
    this.mainService.getDisplay().subscribe(data => {
      this.user = data.login
      this.repos = data.repos_url
      this.avatar = data.avatar_url 
     });

       this.mainService.getRepos().subscribe(repos =>{
       this.repos = repos
     })
     this.mainService.updateuser(this.username)
      console.log(this.username)
     
     this.mainService.getData()
     .subscribe(data =>
      {
        console.log(data)
        this.user = data.login
        this.avatar = data.avatar_url
      })
   }
   }


