import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {SubOneSharedModule} from '../../projects/sub-one/src/app/app.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'sub-one', loadChildren: '../../projects/sub-one/src/app/app.module#SubOneSharedModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SubOneSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
