import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataServices } from './services/trip-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    TripDataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
