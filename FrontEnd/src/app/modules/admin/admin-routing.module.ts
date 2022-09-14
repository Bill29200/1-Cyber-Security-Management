import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from '../../components/about/about.component';
import { StatistiqueComponent } from 'src/app/components/statistique/statistique.component';
import { TesterModelesComponent } from 'src/app/components/tester-modeles/tester-modeles.component';
import { HistoriqueResultatsComponent } from 'src/app/components/historique-resultats/historique-resultats.component';
import { DetectionComponent } from 'src/app/components/detection/detection.component';

import { GererModeleComponent } from 'src/app/components/gerer-modele/gerer-modele.component';
import { GererCompteComponent } from 'src/app/components/gerer-compte/gerer-compte.component';
import { AlgorithmeComponent } from 'src/app/components/algorithme/algorithme.component';



const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'statistique', component: StatistiqueComponent },
      { path: 'tester-modeles', component: TesterModelesComponent },
      { path: 'historique-resultats', component: HistoriqueResultatsComponent },
      { path: 'detection', component: DetectionComponent },
      { path: 'gerer-modele', component: GererModeleComponent },
      { path: 'gerer-compte', component: GererCompteComponent },
     
      { path: 'gerer-modele/algorithme', component: AlgorithmeComponent },
      { path: '**', component: HomeComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
