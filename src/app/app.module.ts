import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { SalaComponent } from './sala/sala.component';
import { ArenaComponent } from './sala/arena/arena.component';
import { ListaEsperaComponent } from './sala/lista-espera/lista-espera.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SalaEditComponent } from './sala/sala-edit/sala-edit.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SalaComponent,
    ArenaComponent,
    ListaEsperaComponent,
    NotFoundComponent,
    SalaEditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
