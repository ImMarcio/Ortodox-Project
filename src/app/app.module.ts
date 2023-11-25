import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UsuarioModule} from "./usuario/usuario.module";
import {LayoutModule} from "./layout/layout.module";
import {BibliaModule} from "./biblia/biblia.module";


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UsuarioModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    BibliaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
