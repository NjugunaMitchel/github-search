import { NgModule } from '@angular/core';
import { MatCardModule }  from '@angular/material/card';
import { MatButtonModule }  from  '@angular/material/button';
import {  MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field'



const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
]


@NgModule({

  imports: [ MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
