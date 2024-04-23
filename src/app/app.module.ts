import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesionComponent } from './layout/public/sesion/sesion.component';
import { LoginModule } from './modules/login/login.module';
import { ContenidoComponent } from './layout/private/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    SesionComponent,
    ContenidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule
  ],    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
