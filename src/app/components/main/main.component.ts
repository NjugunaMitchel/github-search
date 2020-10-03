import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main-service/main.service';
import { Mainclass } from 'src/app/main-class/mainclass';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  main:Mainclass[]
  
  constructor( private mainService:MainService) { }

  ngOnInit()  {
    return this.mainService.getData()
      .subscribe(data => this.main = new Mainclass(data.username))
  }

}
