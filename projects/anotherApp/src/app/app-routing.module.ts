import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ShellComponent} from './components/shell.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
    ]
  },
  {path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
