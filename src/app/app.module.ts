import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SchedulingFormComponent } from './scheduling-form/scheduling-form.component';
import { DataJsonService } from './services/data-json.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchedulingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
