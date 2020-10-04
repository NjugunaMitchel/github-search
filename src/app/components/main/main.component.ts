import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainService } from 'src/app/main-service/main.service';
import { Mainclass } from 'src/app/main-class/mainclass';
 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  main:Mainclass;
  name:string;
  
  constructor( private mainService:MainService) { }
  ngOnInit(): void { }
  
  getUser(name){
    Mainclass.username = name;
    console.log(Mainclass.username)
      
      this.mainService.getData()
      .subscribe(data =>
        {
          console.log(data)
        })
    }
         
        
      }


