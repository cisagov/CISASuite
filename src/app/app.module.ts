import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Routes, RouterModule} from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



import { MainPageComponent } from './main-page/main-page.component';
import { ToolsuiteComponent } from './VMCybersecurity/toolsuite/toolsuite.component';
import { ScoresComponent } from './VMCybersecurity/scores/scores.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';


const appRoutes : Routes =[
{ path: "" , component: MainPageComponent},
{ path:"toolsuite", component: ToolsuiteComponent},
{ path:"scores", component: ScoresComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    ToolsuiteComponent,
    ScoresComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    NgbModule,
    MatProgressBarModule,
    MatTabsModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
