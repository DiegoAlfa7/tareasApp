import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpClientModule} from '@angular/common/http';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { ListaDeseosProvider } from './services/lista-deseos/lista-deseos.service';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { DefaultPipe } from './pipes/default.pipe';
import { TareaComponent } from '../pages/tarea/tarea.component';



@NgModule({
  declarations: [
    MyApp,
    DefaultPipe,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    TareaComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent, 
    TareaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosProvider
  ]
})
export class AppModule {}
