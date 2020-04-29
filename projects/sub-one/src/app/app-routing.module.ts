import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {path: 'sub-one', redirectTo: '/sub-one/home', pathMatch: 'full'},
  {path: 'sub-one/home', component: HomeComponent},
  {path: 'sub-one/about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
