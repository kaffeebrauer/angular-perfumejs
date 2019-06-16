import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, PerfumeConfig } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfumeModule } from 'perfume.js/angular';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfumeModule.forRoot(PerfumeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
