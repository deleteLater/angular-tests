import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DevInMemoryDbService} from './services/dev-in-memory-db.service';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    environment.production ?
      [] : HttpClientInMemoryWebApiModule.forRoot(DevInMemoryDbService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
