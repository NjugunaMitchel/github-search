import { NgModule } from '@angular/core';
import { MatCardModule }  from '@angular/material/card';
import { MatButtonModule }  from  '@angular/material/button';
import {  MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule }  from '@angular/material/input'


const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule
]


@NgModule({

  imports: [ MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
