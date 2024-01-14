import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { MostreModule } from './mostre/mostre.module';
import { VisitatoreComponent } from './visitatore/visitatore/visitatore.component';
import { VisitatoreModule } from './visitatore/visitatore.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    MostreModule,
    VisitatoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
