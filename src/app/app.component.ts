import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {
  NgPerfume,
  PerfumeModule,
  PerfumeAfterViewInit
} from 'perfume.js/angular';
import { from, of } from 'rxjs';
import { delay } from "rxjs/operators";

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
    public perfume: NgPerfume,
    private changeDetectorRef: ChangeDetectorRef
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
        this.perfume.endPaint('AppComponentAfterPaint');
        this.changeDetectorRef.markForCheck();
      }
    );
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