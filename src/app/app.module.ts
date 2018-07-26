import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { NewstileComponent } from './newstile/newstile.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    NewstileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
