import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetectionComponent } from 'src/app/components/detection/detection.component';
import { GererModeleComponent } from 'src/app/components/gerer-modele/gerer-modele.component';

import { HistoriqueResultatsComponent } from 'src/app/components/historique-resultats/historique-resultats.component';

import { StatistiqueComponent } from 'src/app/components/statistique/statistique.component';
import { TesterModelesComponent } from 'src/app/components/tester-modeles/tester-modeles.component';
import { AboutComponent } from '../../components/about/about.component';
import { HomeUComponent } from './components/home-u/home-u.component';


import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      { path: 'home-u', component: HomeUComponent },
      { path: 'about', component: AboutComponent },
      { path: 'statistique', component: StatistiqueComponent },
      { path: 'tester-modeles', component: TesterModelesComponent },
      { path: 'gerer-modele', component: GererModeleComponent },
      { path: 'historique-resultats', component: HistoriqueResultatsComponent },
      { path: 'detection', component: DetectionComponent },
      
      { path: '**', component: HomeUComponent },
      { path: '', redirectTo: '/user/home-u', pathMatch: 'full' },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
