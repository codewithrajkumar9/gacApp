import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.development';
import { ActivityComponent } from './components/activity/activity.component';
import { DealerListComponent } from './components/dealer-list/dealer-list.component';
import { PlaceAnOrderComponent } from './components/place-an-order/place-an-order.component';
import { LoginComponent } from './components/login/login.component';
import { RegistaionComponent } from './components/registaion/registaion.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    DealerListComponent,
    PlaceAnOrderComponent,
    LoginComponent,
    RegistaionComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
