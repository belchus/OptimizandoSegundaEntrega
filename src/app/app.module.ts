import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './shared/pipes/pipes.module';
import { AbmCursosComponent } from './pages/cursos/abm-cursos/abm-cursos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CursosModule } from './pages/cursos/cursos.module';
import {  HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { actionReducerMap } from './store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    NgbModule,
    AppRoutingModule,
    PipesModule,   
    HttpClientModule, 
    StoreModule.forRoot(actionReducerMap, {}), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), EffectsModule.forRoot([])
    //CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
