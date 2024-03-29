import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// MAIN ROUTES
import { AppRoutingModule } from './app-routing.module';

//COMPONENT
import { AppComponent } from './app.component';

//SHARED MODULE
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from '@home/home.module';
import { ComponentsModule } from '@components/components.module';




@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
