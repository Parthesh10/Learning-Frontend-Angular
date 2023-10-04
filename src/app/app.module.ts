import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes for routing.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Import other components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  // Your routes here
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent, // Add other components here
    HomeComponent,
    AboutComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // Add RouterModule with your routes here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
