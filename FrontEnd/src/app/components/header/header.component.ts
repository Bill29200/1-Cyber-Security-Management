
//import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BddService } from 'src/app/services/bdd.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  role: string = this.auth.utilisateur.role;
  name: string = this.auth.utilisateur.name;
  sectionTitle: string =this.bdd.getSectionTitle();
  constructor(private auth: AuthService, private bdd: BddService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }
 
}
