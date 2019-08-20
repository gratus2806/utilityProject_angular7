import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';

import { AppComponent } from './app.component';
import { FeedsComponent } from './subscripton/feeds.component';
import {routing} from "./app.routing";

import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AlertService} from "./service/alert.service";
import {AuthenticationService} from "./service/authentication.service";
import {UserService} from "./service/user.service";
import { HighchartsService } from './service/highcharts.service'; 

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 

import { ChartModule } from 'angular-highcharts';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { EnersysheaderComponent } from './sections/enersysheader/enersysheader.component';
import { EnersynavebarComponent } from './sections/enersynavebar/enersynavebar.component';
import { FinalBuildEnersysComponent } from './Building_applicaton/final-build-enersys/final-build-enersys.component';
import { NewenrollementComponent } from './NavBar_Sections/Enrollement/newenrollement/newenrollement.component';
import { SidebarDirective } from './sections/enersynavebar/sidebar.directive';
import { EnersysSidebarComponent } from './sections/enersys-sidebar/enersys-sidebar.component';
import { EnersysFooterComponent } from './sections/enersys-footer/enersys-footer.component';
import { AccountsComponent } from './NavBar_Sections/accounts/accounts.component';
import { SearchEnrollementComponent } from './NavBar_Sections/Enrollement/search-enrollement/search-enrollement.component';
import { PlansPanelComponent } from './NavBar_Sections/Enrollement/newenrollement/plans-panel/plans-panel.component';
import { AddEnrollementComponent } from './NavBar_Sections/Enrollement/add-enrollement/add-enrollement.component';
import { ChangeRequestComponent } from './NavBar_Sections/Change_Drop/change-request/change-request.component';
import { ChangeRateComponent } from './NavBar_Sections/Change_Drop/change-rate/change-rate.component';
// import {BrowserModule} from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    LoginComponent,
    HomeComponent,
    EnersysheaderComponent,
    EnersynavebarComponent,
    FinalBuildEnersysComponent,
    NewenrollementComponent,
    SidebarDirective,
    EnersysSidebarComponent,
    EnersysFooterComponent,
    AccountsComponent,
    SearchEnrollementComponent,
    PlansPanelComponent,
    AddEnrollementComponent,
    ChangeRequestComponent,
    ChangeRateComponent 
    
    
    
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SliderModule,
    ChartModule,
    FormsModule
  ],
  providers: [
    UserService,
    AlertService,
    AuthenticationService,
    NgbActiveModal,
    NgbCarouselConfig,
    HighchartsService
   
   
  ],
  bootstrap: [AppComponent],
  // entryComponents : [PlansPanelComponent]
})
export class AppModule { }
// platformBrowserDynamic().bootstrapModule(AppModule);