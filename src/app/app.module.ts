import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MaterialModule} from './material/material.module';

import {MenuComponent} from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { InventariosComponent } from './inventarios/inventarios.component';

//Http CLient
import {HttpClientModule} from '@angular/common/http';
import { IndiceRolesComponent } from './roles/indice-roles/indice-roles.component'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    UsuariosComponent,
    AdministracionComponent,
    InventariosComponent,
    IndiceRolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
