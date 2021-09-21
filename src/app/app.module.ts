import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { StepMarkComponent } from './step-mark/step-mark.component'
@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NavMenuComponent,
    FarmDetailsComponent,
    StepMarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
