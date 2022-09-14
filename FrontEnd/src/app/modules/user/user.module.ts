import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserFooterComponent } from './components/user-footer/user-footer.component';

import { HomeUComponent } from './components/home-u/home-u.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserHeaderComponent,
     FooterComponent,
      
       AboutComponent,
       UserHeaderComponent,
       UserFooterComponent,
      
       HomeUComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
