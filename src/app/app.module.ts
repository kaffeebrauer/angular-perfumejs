import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfumeModule } from 'perfume.js/angular';
//import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights';

export const PerfumeConfig = {
  firstContentfulPaint: true,
  firstInputDelay: true,
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfumeModule.forRoot(PerfumeConfig),
    // ApplicationInsightsModule.forRoot({
    //   instrumentationKey: ''
    // })
  ],
  providers: [
    //  AppInsightsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
