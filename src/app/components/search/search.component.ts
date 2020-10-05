import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main-service/main.service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 

  constructor() { }

  
    mainService: any;
    user:any;
    username:string;
    repos:any;
    avatar:any;

  getUser(){
    this.mainService.updateuser(this.username)
      console.log(this.username)

      this.mainService.getData()
      .subscribe(user =>
       {
         console.log(user)
         this.user = user
         /* this.avatar = data.avatar_url */
       })

       this.mainService.getRepos(name).subscribe(repos =>{
       this.repos = repos
     })
     
     
   }
   ngOnInit() {}
  }




