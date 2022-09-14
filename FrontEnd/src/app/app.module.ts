import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { TesterModelesComponent } from './components/tester-modeles/tester-modeles.component';
import { HistoriqueResultatsComponent } from './components/historique-resultats/historique-resultats.component';
import { DetectionComponent } from './components/detection/detection.component';
import { GererModeleComponent } from './components/gerer-modele/gerer-modele.component';
import { GererCompteComponent } from './components/gerer-compte/gerer-compte.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AlgorithmeComponent } from './components/algorithme/algorithme.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BddService } from './services/bdd.service';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    StatistiqueComponent,
    TesterModelesComponent,
    HistoriqueResultatsComponent,
    GererModeleComponent,
    GererCompteComponent,
    AlgorithmeComponent,  
    
    DetectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,FormsModule,
    MatTableModule, 
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BddService],
  bootstrap: [AppComponent],
})
export class AppModule {}
