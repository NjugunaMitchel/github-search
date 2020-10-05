import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'search',component:SearchComponent},

  { path: ' ', redirectTo:"/main", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
