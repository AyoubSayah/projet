import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule ,ReactiveFormsModule } from '@angular/forms';
import{ParentComponent}from './parent/parent.component';
import { HomeComponent } from './parent/home/home.component'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SecritaireComponent } from './secritaire/secritaire.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { ConsulterdemandesComponent } from './secritaire/consulterdemandes/consulterdemandes.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { ListeDeselevesComponent } from './secritaire/liste-deseleves/liste-deseleves.component';
import { AdminComponent } from './admin/admin.component';
import { ListeComponent } from './admin/liste/liste.component';
import {MatSelectModule} from '@angular/material/select';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    HomeComponent,
    SecritaireComponent,
    ConsulterdemandesComponent,
    ListeDeselevesComponent,
    AdminComponent,
    ListeComponent,
    AdminloginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
