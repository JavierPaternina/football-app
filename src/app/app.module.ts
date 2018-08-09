import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
// import { StoreModule } from "@ngrx/store";
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from "./core/firebase/firebaseconfig";
import { StatusBar } from '@ionic-native/status-bar';
import { SharedModule } from './shared/shared.module';
import { PAGES } from './pages/index'
import { FootballTeamApp } from './app.component';

@NgModule({
  declarations: [
    FootballTeamApp,
    PAGES 

  ],
  imports: [
    BrowserModule,
    SharedModule,
    IonicModule.forRoot(FootballTeamApp),
    AngularFireModule.initializeApp(firebaseConfig.fire)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FootballTeamApp,
    PAGES 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
