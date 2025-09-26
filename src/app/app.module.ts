import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturedInsurancesComponent } from './components/featured-insurances/featured-insurances.component';
import { PymeSectionComponent } from './components/pyme-section/pyme-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    FeaturedInsurancesComponent,
    PymeSectionComponent,
    FooterComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
