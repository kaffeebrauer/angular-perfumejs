import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {
  NgPerfume,
  PerfumeModule,
  PerfumeAfterViewInit
} from 'perfume.js/angular';
import { from, of } from 'rxjs';
import { delay } from "rxjs/operators";
//import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { AppInsightsService } from './services/app-insights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'angular-perfumejs';
  componentInitialised: boolean = false;
  initialData: Snafu = { message: '' };

  /**
   * Default constructor for app component
   */
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private perfume: NgPerfume,
    private appInsightsService: AppInsightsService
  ) {
    this.perfume.start('AppComponentAfterPaint');
  }

  ngAfterViewInit(): void {
    this.loadAwesomeData();
  }

  loadAwesomeData = async () => {
    let snafu: Snafu = { message: 'Status norminal: all fudged up!' };

    of(snafu).pipe(delay(5000)).subscribe(
      (data: Snafu) => {
        this.initialData = data;
        console.log(snafu.message);
      },
      (error) => {

      },
      () => {
        // End measure component time to paint
        this.componentInitialised = true;
        this.changeDetectorRef.markForCheck();
      }
    );

    const fcp = await this.perfume.observeFirstContentfulPaint;
    const fid = await this.perfume.observeFirstContentfulPaint;

    this.appInsightsService.logEvent('PerfumeJs-App FCP', 'duration', fcp.toString());
    this.appInsightsService.logEvent('PerfumeJs-App FID', 'duration', fid.toString());

  }
}

export class Snafu {
  message: string;
}

// Perfume.js config, supports AOT and DI
export const PerfumeConfig = {
  firstContentfulPaint: true,
  firstInputDelay: true,
};